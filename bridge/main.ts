import Tv from "./TV";
import Radio from "./radio";
import Device from "./Device";
import BasicRemote from "./basic-remote";
import AdvancedRemote from "./advanced-remote";

function main() {
    testDevice(new Tv());
    testDevice(new Radio());
}

function testDevice(device: Device): void {
    console.log("Tests with basic remote.");
    let basicRemote = new BasicRemote(device);
    basicRemote.power();
    device.printStatus();

    console.log("Tests with advanced remote.");
    let advancedRemote = new AdvancedRemote(device);
    advancedRemote.power();
    advancedRemote.mute();
    device.printStatus();
}

main();
