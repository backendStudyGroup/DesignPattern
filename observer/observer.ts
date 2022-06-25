interface Listener {
  name: string;
  update(filename: string): void;
}

class LoggingListener implements Listener {
  public name: string;
  private message: string;

  constructor(name: string, message: string) {
    this.name = name;
    this.message = message;
  }

  public update(filename: string): void {
    console.log(`${this.message}: ${filename}`);
  }
}

interface EventManager {
  subscribe(eventType: string, listener: Listener): void;
  unsubscribe(eventType: string, listener: Listener): void;
  notify(eventType: string, data: any): void;
}

class EventManager implements EventManager {
  private listeners: Map<string, Listener[]>; // { event1: [listener1, listener2, ...], event2: [ ... ] }

  constructor() {
    this.listeners = new Map([
      ["create", []],
      ["write", []],
    ]);
  }

  public subscribe(eventType: string, listener: Listener): void {
    const isEventExist = this.listeners.has(eventType);
    if (!isEventExist) {
      this.listeners.set(eventType, []);
    }
    const eventSubscribers = this.listeners.get(eventType);
    const isListenerExist = eventSubscribers.includes(listener);
    if (isListenerExist) {
      return console.log(
        `Event: '${eventType}' has been subscribed by Listener: ${listener.name} already`
      );
    }
    console.log(
      `\nEvent: '${eventType}' has been subscribed by Listener: ${listener.name}\n`
    );
    eventSubscribers.push(listener);
  }

  public unsubscribe(eventType: string, listener: Listener): void {
    const isEventExist = this.listeners.has(eventType);
    if (!isEventExist) {
      return console.log(
        `Cannot unsubscribe Event: '${eventType}', which is not exists`
      );
    }
    const eventSubscribers = this.listeners.get(eventType);
    const listenerIdx = eventSubscribers.indexOf(listener);
    if (listenerIdx === -1) {
      return console.log(
        `Listener: ${listener.name} does not subscribe this Event: '${eventType}'`
      );
    }
    eventSubscribers.splice(listenerIdx, 1);
    console.log(
      `\nListener: ${listener.name} unsubscribed this Event: '${eventType}'\n`
    );
  }

  public notify(eventType: string, data: any): void {
    console.log("Notifying listeners ...");
    const eventSubscribers = this.listeners.get(eventType);
    for (const subscriber of eventSubscribers) {
      subscriber.update(data);
    }
  }
}

class FileClass {
  public name: string;
  public content: string;

  constructor(name: string, content: string = "") {
    this.name = name;
    this.content = content;
  }

  public write(content: string) {
    this.content.concat(content);
  }
}

class Editor {
  public events: EventManager;
  private file: FileClass;

  constructor() {
    this.events = new EventManager();
  }

  public createFile(name: string) {
    this.file = new FileClass(name);
    this.events.notify("create", this.file.name);
  }

  public writeFile(content: string) {
    this.file.write(content);
    this.events.notify("write", this.file.name);
  }
}

function client(): void {
  const editor = new Editor();
  const logger1 = new LoggingListener(
    "logger_1",
    "To logger 1: someone has created the file"
  );
  const logger2 = new LoggingListener(
    "logger_2",
    "To logger 2: someone has created the file"
  );
  editor.events.subscribe("create", logger1);
  editor.events.subscribe("create", logger2);
  console.log("\n------- create newFile -------\n");
  editor.createFile("newFile");

  // unsubscribe logger 2
  editor.events.unsubscribe("create", logger2);
  console.log("\n------- create newFile2 -------\n");
  editor.createFile("newFile2");

  // logger 3 subscribe write event
  const logger3 = new LoggingListener(
    "logger_3",
    "To logger3: someone has written to the file"
  );
  editor.events.subscribe("write", logger3);
  console.log("\n------- write newFile2 -------\n");
  editor.writeFile("abcdefg");
}

client();
