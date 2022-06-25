var LoggingListener = /** @class */ (function () {
    function LoggingListener(name, message) {
        this.name = name;
        this.message = message;
    }
    LoggingListener.prototype.update = function (filename) {
        console.log("".concat(this.message, ": ").concat(filename));
    };
    return LoggingListener;
}());
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = new Map([
            ["create", []],
            ["write", []],
        ]);
    }
    EventManager.prototype.subscribe = function (eventType, listener) {
        var isEventExist = this.listeners.has(eventType);
        if (!isEventExist) {
            this.listeners.set(eventType, []);
        }
        var eventSubscribers = this.listeners.get(eventType);
        var isListenerExist = eventSubscribers.includes(listener);
        if (isListenerExist) {
            return console.log("Event: '".concat(eventType, "' has been subscribed by Listener: ").concat(listener.name, " already"));
        }
        console.log("\nEvent: '".concat(eventType, "' has been subscribed by Listener: ").concat(listener.name, "\n"));
        eventSubscribers.push(listener);
    };
    EventManager.prototype.unsubscribe = function (eventType, listener) {
        var isEventExist = this.listeners.has(eventType);
        if (!isEventExist) {
            return console.log("Cannot unsubscribe Event: '".concat(eventType, "', which is not exists"));
        }
        var eventSubscribers = this.listeners.get(eventType);
        var listenerIdx = eventSubscribers.indexOf(listener);
        if (listenerIdx === -1) {
            return console.log("Listener: ".concat(listener.name, " does not subscribe this Event: '").concat(eventType, "'"));
        }
        eventSubscribers.splice(listenerIdx, 1);
        console.log("\nListener: ".concat(listener.name, " unsubscribed this Event: '").concat(eventType, "'\n"));
    };
    EventManager.prototype.notify = function (eventType, data) {
        console.log("Notifying listeners ...");
        var eventSubscribers = this.listeners.get(eventType);
        for (var _i = 0, eventSubscribers_1 = eventSubscribers; _i < eventSubscribers_1.length; _i++) {
            var subscriber = eventSubscribers_1[_i];
            subscriber.update(data);
        }
    };
    return EventManager;
}());
var FileClass = /** @class */ (function () {
    function FileClass(name, content) {
        if (content === void 0) { content = ""; }
        this.name = name;
        this.content = content;
    }
    FileClass.prototype.write = function (content) {
        this.content.concat(content);
    };
    return FileClass;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.events = new EventManager();
    }
    Editor.prototype.createFile = function (name) {
        this.file = new FileClass(name);
        this.events.notify("create", this.file.name);
    };
    Editor.prototype.writeFile = function (content) {
        this.file.write(content);
        this.events.notify("write", this.file.name);
    };
    return Editor;
}());
function client() {
    var editor = new Editor();
    var logger1 = new LoggingListener("logger_1", "To logger 1: someone has created the file");
    var logger2 = new LoggingListener("logger_2", "To logger 2: someone has created the file");
    editor.events.subscribe("create", logger1);
    editor.events.subscribe("create", logger2);
    console.log("\n------- create newFile -------\n");
    editor.createFile("newFile");
    // unsubscribe logger 2
    editor.events.unsubscribe("create", logger2);
    console.log("\n------- create newFile2 -------\n");
    editor.createFile("newFile2");
    // logger 3 subscribe write event
    var logger3 = new LoggingListener("logger_3", "To logger3: someone has written to the file");
    editor.events.subscribe("write", logger3);
    console.log("\n------- write newFile2 -------\n");
    editor.writeFile("abcdefg");
}
client();
//# sourceMappingURL=observer.js.map