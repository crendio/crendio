import "reflect-metadata";
import { App } from "@crendio/crendio";
import TestServer from "../modules/test_module/server";

@App({
  modules: [TestServer],
})
class ServerApp {
  constructor() {
    console.log("Hello there!");
  }
}
