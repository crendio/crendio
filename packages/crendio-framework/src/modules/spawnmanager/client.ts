import { Module, Util } from "@crendio/crendio";
import { Vector3 } from "fivem-js";

@Module({
  global: true,
})
export default class SpawnClient {
  public initialSpawnDone = false;

  public async spawnPlayer(coords: Vector3): Promise<void> {
    DoScreenFadeOut(500);
    while (!IsScreenFadedOut) {
      await Util.wait(0);
    }
  }
}
