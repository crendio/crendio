export default class Util {
  public static getMetadata<U = any, T = any>(
    target: T,
    key: string,
    defaultData: U
  ): U {
    const data = Reflect.getOwnMetadata(key, target);
    if (!data) {
      return defaultData;
    }
    return data as unknown as U;
  }
}
