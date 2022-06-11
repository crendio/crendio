import "reflect-metadata";
import { Module } from "./Module";
import { Event } from "./Event";
import { App } from "./App";
import { Application } from "../classes";

describe("event metadata works", () => {
  test("event gets set", () => {
    @Module({ global: true })
    class SessionManager {
      @Event("sessionStarted", { net: false })
      public onSessionStarted() {
        console.log(`session has started`);
      }
    }

    @App({ modules: [SessionManager] })
    class ClientApp extends Application {}

    const appInstance = new ClientApp();

    console.log(`have instances`, appInstance.events);
  });
});
