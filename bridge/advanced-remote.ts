import BasicRemote from "./basic-remote";
import Device from "./Device";


class AdvancedRemote extends BasicRemote {

  constructor(device: Device) {
    super(device);
  }

  public mute(): void {
    console.log("Remote: mute");
    this.device.setVolume(0);
  }
}

export default AdvancedRemote;