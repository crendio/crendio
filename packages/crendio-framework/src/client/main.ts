import { App } from "@crendio/crendio";
import TestClient from "../modules/test_module/client";
import { MapManagerClient } from "../modules/mapmanager/client";
import SpawnClient from "../modules/spawnmanager/client";

@App({
  modules: [TestClient, MapManagerClient, SpawnClient],
})
class ClientApp {}
