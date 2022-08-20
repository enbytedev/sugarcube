## Logger

The logger utility provides the ability to format messages with a timestamp and level.
----

### Log Levels
The default usage is:

```js
sugarcube.log.debug('This is output as DEBUG if log level is debug (4)');
sugarcube.log.info('This is output as INFO');
sugarcube.log.warn('This is output as WARN');
sugarcube.log.error('This is output as ERROR');
```

To set a log level,
`sugarcube.log.setLevel("debug");`
or
`sugarcube.log.setLevel(4);`

The following are provided log levels:
|Level|#|Default|
|--|--|--|
|SILENT|0|
|ERROR|1|
|WARN|2|
|INFO|3|X
|DEBUG|4|

### Replace Objects
sugarcube also allows you to replace the default console object to provide easy implementation and maximum compatibility:

```js
sugarcube.log.useObject(console);

sugarcube.log.setLevel("debug");
console.log("This is output as INFO");
console.info("This is output as INFO");
console.warn("This is output as WARN");
console.error("This is output as ERROR");
console.debug("This is output as DEBUG");
```

### Update Checker
**.github** Queries GitHub releases for a repository.
Example: `sugarcube.log.updateChecker.github("https://api.github.com/repos/enbytedev/filing-saucer/releases/latest", "1.0.0", false);`
**.custom** Queries a remote JSON file with specified keys.
Example: `sugarcube.log.updateChecker.custom('https://example.com/file.json', '1.0.0', false, 'version', 'download');`