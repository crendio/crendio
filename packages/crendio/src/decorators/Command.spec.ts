import "reflect-metadata";
import { Module } from "./Module";
import { App } from "./App";
import { Command } from "./Command";
import { Application } from "../classes";

describe("commands are available on instance", () => {
  test("exists on standard", () => {
    @Module({ global: true })
    class Manager {
      @Command("whoami")
      public whoami(source: number) {
        console.log(`i am number ${source}`);
      }
    }

    @App({
      modules: [Manager],
    })
    class ClientApp extends Application {}

    const instance = new ClientApp();
  });
});
