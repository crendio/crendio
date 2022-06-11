export type EventOptions = {
  net: boolean;
};

export type EventData = {
  methodName: string;
  handler: () => void | Promise<void>;
  options: EventOptions;
};

export type EventDatas = { [key: string]: EventData };

const defaultOptions: Partial<EventOptions> = {
  net: false,
};

export const Event = (name: string, options: EventOptions) => {
  const localOptions = { ...defaultOptions, ...options };
  return (target: any, propertyName: string, desc: PropertyDescriptor) => {
    const events =
      (Reflect.getOwnMetadata("events", target) as unknown as {
        [key: string]: any;
      }) || {};

    events[name] = {
      methodName: propertyName,
      handler: desc.value,
      options: localOptions,
    };

    Reflect.defineMetadata("events", events, target);
  };
};
