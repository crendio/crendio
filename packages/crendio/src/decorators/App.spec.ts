import "reflect-metadata";
import { App } from "./App";
import { Module } from "./Module";
import { onReady } from "../types";
import { Application } from "../classes";

describe("creates a basic app", () => {
  test("basic app", () => {
    @Module({
      global: true,
    })
    class Config implements onReady {
      public name = "smith";

      public $onReady() {
        console.log(`hello there!`);
      }
    }

    @App({
      modules: [Config],
    })
    class ClientApp extends Application {}

    const app = new ClientApp();
  });
});
