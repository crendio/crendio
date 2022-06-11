import { autoInjectable, singleton } from "tsyringe";
import Util from "../util/Util";
import { EventDatas } from "./Event";

export type ModuleOptions = {
  global?: boolean;
};

const defaultOptions: Partial<ModuleOptions> = {
  global: false,
};

export const Module = (options?: ModuleOptions) => {
  const userOptions = options || {};
  const localOptions = { ...defaultOptions, ...options };
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    const events = Util.getMetadata<EventDatas>(
      constructor.prototype,
      "events",
      {}
    );

    const cl = class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        for (const [eventName, info] of Object.entries(events)) {
          if (info.options.net) {
            onNet(eventName, (...args: any[]) => {
              this[info.methodName](...args);
            });
          }
        }
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
