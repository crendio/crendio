import { Command, Module } from "@crendio/crendio";
import { NotificationsClient } from "../notifications/client";

@Module({
  global: true,
})
export default class DevClient {
  constructor(public notify: NotificationsClient) {}
  @Command("coords")
  public getCoords() {
    console.log("doing coords");
    const coords = GetEntityCoords(PlayerPedId());
    this.notify.sendStandard(`coords ${JSON.stringify(coords)}`);
    console.log(`coords`, coords);
  }

  $onReady() {
    console.log(`dev log ready`);
  }
}
