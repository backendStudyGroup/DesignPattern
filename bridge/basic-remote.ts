import Remote from "./remote";
import Device from "./Device";

class BasicRemote implements Remote {
  protected device: Device;


  constructor(device: Device) {
    this.device = device;
  }


  public power(): void {
    console.log("Remote: power toggle");
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }


  public volumeDown(): void {
    console.log("Remote: volume down");
    this.device.setVolume(this.device.getVolume() - 10);
  }


  public volumeUp(): void {
    console.log("Remote: volume up");
    this.device.setVolume(this.device.getVolume() + 10);
  }


  public channelDown(): void {
    console.log("Remote: channel down");
    this.device.setChannel(this.device.getChannel() - 1);
  }


  public channelUp(): void {
    console.log("Remote: channel up");
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

export default BasicRemote;