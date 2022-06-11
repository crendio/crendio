export type AppOptions = {
  modules: any[];
};

const defaultOptions: Partial<AppOptions> = {
  modules: [],
};

export const App = (options: AppOptions) => {
  const userOptions = options || {};
  const localOptions = { ...defaultOptions, ...options };
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    const allEvents: string[] = [];
    for (const module of options.modules) {
      const events = Reflect.getMetadata("events", module.prototype);
      if (events) {
        for (const [name, event] of Object.entries<any>(events)) {
          allEvents.push(event.methodName);
        }
      }
      const modInstance = new module();
      if (modInstance["$onReady"]) {
        console.log(`found a ready`, typeof modInstance["$onReady"]);
      }
    }

    const tr = class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        Object.defineProperty(this, "events", {
          value: allEvents,
          writable: true,
          configurable: true,
        });
      }
    };

    return tr;
  };
};
