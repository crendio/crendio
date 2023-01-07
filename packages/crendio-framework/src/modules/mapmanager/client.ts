import { Module, Event } from "@crendio/crendio";

@Module({
  global: true,
})
export class MapManagerClient {
  @Event("onClientResourceStart", {
    net: false,
  })
  public onStart(_: undefined, resource: string) {
    if (resource === GetCurrentResourceName()) {
      emit("onClientMapStart", resource);
      emit("onClientGameTypeStart", resource);
    }
  }
}
