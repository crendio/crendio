import { Module } from "@crendio/crendio";

@Module({
  global: true,
})
export class NotificationsClient {
  public sendStandard(message: string): void {
    // yet-impl
  }

  public helpText(message: string): void {
    // yet-impl
  }

  public sendAward(
    message: string,
    txd: string,
    txn: string,
    rpBonus: number,
    color: number,
    titleLabel: string
  ): void {
    BeginTextCommandThefeedPost("STRING");
    AddTextComponentSubstringPlayerName(message);
    EndTextCommandThefeedPostAward(txd, txn, rpBonus, color, titleLabel);
  }
}
