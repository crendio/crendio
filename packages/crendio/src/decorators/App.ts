export type AppOptions = {
  modules: any[];
};

const defaultOptions: Partial<AppOptions> = {
  modules: [],
};

export const App = (options: AppOptions) => {
  const userOptions = options || {};
  const localOptions = { ...defaultOptions, ...userOptions };
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    const allEvents: string[] = [];

    const onReadys: (() => void)[] = [];
    for (const module of localOptions.modules) {
      const onReadys: (() => void)[] = [];
      for (const module of localOptions.modules) {
        const events = Reflect.getMetadata("events", module.prototype);
        if (events) {
          for (const [, event] of Object.entries<any>(events)) {
            for (const [, event] of Object.entries<any>(events)) {
              allEvents.push(event.methodName);
            }
          }
          const modInstance = new module();
          if (modInstance["$onReady"]) {
            onReadys.push(modInstance["$onReady"]);
          }
        }
      }
    }
    const tr = class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        onReadys.forEach((v) => {
          v.call<unknown, unknown[], unknown>(this as unknown);
        });
        onReadys.forEach((v) => {
          v.call<unknown, unknown[], unknown>(this as unknown);
        });
        Object.defineProperty(this, "events", {
          value: allEvents,
          writable: true,
          configurable: true,
        });
      }
    };

    new tr();

    console.log(`started`);

    return tr;
  };
};
