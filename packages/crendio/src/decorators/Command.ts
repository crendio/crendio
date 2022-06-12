export type CommandOptions = {
  restrictors?: any[];
  requireAce?: boolean;
};

const defaultOptions: Partial<CommandOptions> = {
  restrictors: [],
  requireAce: false,
};

export type CommandMeta = {
  command: string;
  handler: string;
  requireAce: boolean;
} & Pick<CommandOptions, "restrictors">;

export const Command = (commandName: string, options?: CommandOptions) => {
  const userOptions = options || {};
  const localOptions = { ...defaultOptions, ...userOptions };
  return (target: any, name: string, desc: PropertyDescriptor) => {
    const method = desc.value;
    desc.value = function (...args: any[]) {
      const res = method.apply(this, args);
      return res;
    };

    const commands = Reflect.getOwnMetadata("commands", target) || [];

    commands.push({
      command: commandName,
      handler: name,
      restrictors: localOptions.restrictors,
      requireAce: localOptions.requireAce,
    });
  };
};
