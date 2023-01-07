import { Module, Util, Event } from "@crendio/crendio";
import { Vector3 } from "fivem-js";

@Module({
  global: true,
})
export default class SpawnClient {
  public initialSpawnDone = false;
  public autoSpawn = false;
  public autoSpawnCB: (() => void) | undefined = undefined;
  public defaultModel = "mp_m_freemode_01";

  public async spawnPlayer(coords: Vector3): Promise<void> {
    DoScreenFadeOut(500);
    while (!IsScreenFadedOut) {
      await Util.wait(0);
    }

    this.freezePlayer(PlayerId(), true);
    await Util.loadModel(this.defaultModel);
    SetPlayerModel(PlayerId(), this.defaultModel);
    SetPedDefaultComponentVariation(PlayerPedId());
    SetModelAsNoLongerNeeded(this.defaultModel);

    RequestCollisionAtCoord(coords.x, coords.y, coords.z);
    const ped = PlayerPedId();

    SetEntityCoordsNoOffset(
      ped,
      coords.x,
      coords.y,
      coords.z,
      false,
      false,
      false
    );

    NetworkResurrectLocalPlayer(coords.x, coords.y, coords.z, 0, true, true);
    ClearPedTasksImmediately(ped);
    RemoveAllPedWeapons(ped, false);
    ClearPlayerWantedLevel(PlayerId());

    const time = GetGameTimer();

    while (
      !HasCollisionLoadedAroundEntity(ped) &&
      GetGameTimer() - time < 5000
    ) {
      await Util.wait(0);
    }

    ShutdownLoadingScreen();

    if (IsScreenFadedOut()) {
      DoScreenFadeIn(500);
      while (!IsScreenFadedIn()) {
        await Util.wait(0);
      }
    }

    this.freezePlayer(PlayerId(), false);
  }

  public freezePlayer(id: number, freeze: boolean) {
    const player = id;
    SetPlayerControl(player.toString(), !freeze, 0);
    const ped = GetPlayerPed(player);
    if (!freeze) {
      if (!IsEntityVisible(ped)) {
        SetEntityVisible(ped, true, false);
      }

      if (!IsPedInAnyVehicle(ped, false)) {
        SetEntityCollision(ped, true, false);
      }

      FreezeEntityPosition(ped, false);
      SetPlayerInvincible(player, false);
    } else {
      if (IsEntityVisible(ped)) {
        SetEntityVisible(ped, false, false);
      }

      SetEntityCollision(ped, false, false);
      FreezeEntityPosition(ped, true);
      SetPlayerInvincible(player, true);

      if (!IsPedFatallyInjured(ped)) {
        ClearPedTasksImmediately(ped);
      }
    }
  }

  @Event("onClientMapStart", { net: false })
  public onStart() {
    this.spawnPlayer(new Vector3(0, 0, 0)).then(() => {
      console.log(`player spawned`);
    });
  }
}
