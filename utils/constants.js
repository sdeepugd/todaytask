function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("TODO", 0);
define("ALREADY_DONE", 1);
define("DELETED", 2);