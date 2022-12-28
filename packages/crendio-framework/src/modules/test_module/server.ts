import { Module } from "@crendio/crendio";

@Module({
  global: true,
})
export default class TestServer {
  $onReady() {
    console.log("Test server ready!");
  }
}
