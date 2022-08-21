interface Device {
    isEnabled(): boolean;

    enable(): void;

    disable(): void;

    getVolume(): number;

    setVolume(percent: number): void;

    getChannel(): number;

    setChannel(channel: number): void;

    printStatus(): void;
}

export default Device