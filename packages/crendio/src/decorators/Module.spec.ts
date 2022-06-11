import "reflect-metadata";
import { Module } from "./Module";
import { container, singleton } from "tsyringe";

describe("properly decorates", () => {
  afterEach(() => {
    container.reset();
  });
  test("default", () => {
    class CustomImport {}

    @Module()
    class Something {
      constructor(public custom?: CustomImport) {}
    }

    const instance = new Something();

    expect(instance.custom instanceof CustomImport).toBeTruthy();
  });

  test("injected class is singleton", () => {
    @Module({
      global: true,
    })
    class UserService {
      public users: string[] = [];
    }

    @Module()
    class UserManager {
      constructor(public userService?: UserService) {
        if (this.userService) {
          this.userService.users.push("a");
        }
      }
    }

    const instance = new UserManager();

    expect(instance.userService instanceof UserService).toBeTruthy();

    expect(instance.userService!.users).toHaveLength(1);

    @Module()
    class LoginManager {
      constructor(public userService?: UserService) {}
    }

    const loginInstance = new LoginManager();

    expect(loginInstance.userService!.users).toHaveLength(1);
  });

  test("singletons can be injected", () => {
    @Module({
      global: true,
    })
    class Config {
      public name = "smith";
    }

    @Module({
      global: true,
    })
    class App {
      constructor(public config?: Config) {
        if (config) {
          config.name = "john";
        }
      }
    }

    const appInstance = new App();

    expect(appInstance.config!.name).toEqual("john");
  });
});
