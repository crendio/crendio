import { App } from "@crendio/crendio";
import TestClient from "../modules/test_module/client";

@App({
  modules: [TestClient],
})
class ClientApp {}
