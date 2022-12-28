import { autoInjectable, singleton } from "tsyringe";
import Util from "../util/Util";
import { EventData, EventDatas } from "./Event";
import { CommandMeta } from "./Command";

export type ModuleOptions = {
  global?: boolean;
};

const defaultOptions: Partial<ModuleOptions> = {
  global: false,
};

export const Module = (options?: ModuleOptions) => {
  const userOptions = options || {};
  const localOptions = { ...defaultOptions, ...userOptions };
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    const events = Util.getMetadata<EventDatas>(
      constructor.prototype,
      "events",
      {}
    );

    const commands = Util.getMetadata<CommandMeta[]>(
      constructor.prototype,
      "commands",
      []
    );

    const cl = class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        registerEvents(this, events);
        registerCommands(this, commands);
      }
    };

    if (localOptions.global) {
      const instance = autoInjectable()(cl);
      singleton()(instance);
      return instance;
    }

    return autoInjectable()(cl);
  };
};

const registerEvents = (target: any, events: EventDatas) => {
  for (const [eventName, info] of Object.entries(events)) {
    if (info.options.net) {
      onNet(eventName, (...args: any[]) => {
        const source = global.source;

        target[info.methodName](...[source, ...args]);
      });
    } else {
      on(eventName, (...args: any[]) => {
        const source = global.source;
        target[info.methodName](...[source, ...args]);
      });
    }
  }
};

const registerCommands = (target: any, commands: CommandMeta[]) => {
  for (const command of commands) {
    RegisterCommand(
      command.command,
      (...args: any[]) => {
        const errors: any[] = [];
        if (command.restrictors) {
          let restricted = false;
          for (const restrictor of command.restrictors) {
            if (restrictor() === false) {
              restricted = true;
              errors.push(`You do not have permission to run this command!`);
              break;
            }
          }
        }

        if (errors.length > 0) {
          errors.forEach((v) => {
            if (IsDuplicityVersion()) {
              console.log(v);
            }
          });
          return;
        }

        ///@ts-ignore
        this[command.handler](args[0], [...args[1]]);
      },
      false
    );
  }
};
