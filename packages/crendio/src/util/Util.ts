export class Util {
export class Util {
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

  /**
   * Helper method for doing waits similar to `Citizen.Wait()` in Lua
   * @param {number} time the time in milliseconds to wait for
   */
  public static wait(time: number): Promise<void> {
    return new Promise((res) => setTimeout(res, time));
  }

  public static async loadModel(model: number | string): Promise<void> {
    return new Promise((resolve, reject) => {
      RequestModel(model);
      const mtick = setTick(() => {
        if (HasModelLoaded(model)) {
          clearTick(mtick);
          resolve();
        }
      });
    });
  }
}
