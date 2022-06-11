import { autoInjectable, singleton } from "tsyringe";

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
    const cl = class extends constructor {
      constructor(...args: any[]) {
        super(...args);
      }
    };

    if (localOptions.global) {
      console.log(`localizing`);
      const instance = autoInjectable()(cl);
      singleton()(instance);
      return instance;
    }

    return autoInjectable()(cl);
  };
};
