<p align="center">
  <a><img src="https://raw.githubusercontent.com/enbytedev/sugarcube/main/ICON.png" width="250" height="250" /></a>

  <h3 align="center">✨ sugarcube ✨</h3>
 <p align="center"><i>a common library for <b>enbytedev</b> projects</i></p>
</p>
  <p align="center">
    <a href="https://github.com/enbytedev/sugarcube">
      <img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/enbytedev/sugarcube?style=for-the-badge">
    </a>
    <a href="https://github.com/enbytedev/sugarcube/blob/main/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/enbytedev/sugarcube?style=for-the-badge&color=AA4A44" />
    </a>
  <hr>
</p>

```
npm i sugarcube
```

<h3 align="center">Provided Functionality:</h3>

<details>
  <summary>
    Enhanced Logger
  </summary>
  
Code
```js
import sugarcube from 'sugarcube';
const log = sugarcube.logger;

log.info('This line is on the info level...\n Plus multi-line\n and stuff...');
log.warn("warning... something's a bit off!");
log.error("Yeah that's not good!");
```
Produces
<p align="center"><a><img src="https://i.imgur.com/WU8VTiA.png" width="600" height="140" /></a></p>
  
</details>

<details>
  <summary>
    Random Number Generator
  </summary>
  
Code
```js
import sugarcube from 'sugarcube';

console.log(sugarcube.misc.rnum(2));
console.log(sugarcube.misc.rnum(3));
console.log(sugarcube.misc.rnum(4));
console.log(sugarcube.misc.rnum(5));
console.log(sugarcube.misc.rnum(5));
console.log(sugarcube.misc.rnum(5));
console.log(sugarcube.misc.rnum(5));
```
Produces
```
21
409
7962
96551
71170
88556
26146
```
</details>

<details>
  <summary>
    Update Checker
  </summary>
  
  <b>.github</b>: Queries GitHub releases for a repository.
  <br><b>Args:</b><br>String: GitHub API endpoint<br>String: Local Version<br> Boolean: Whether or not to print in the console a check is being run if no update is available.
  <br><br><b>Example:</b> `updateChecker.github("https://api.github.com/repos/enbytedev/filing-saucer/releases/latest", fsutils.jsonValue("./package.json", "version"), false);`
  <br>
  <br><b>.custom</b>: Queries a remote JSON file with specified keys.
  <br><b>Args:</b><br>String: GitHub API endpoint<br>String: Local Version<br> Boolean: Whether or not to print in the console a check is being run if no update is available.<br>String: Key to get remote JSON value for version<br>String: Key to get remote JSON value for download link.
  <br><br><b>Example:</b> `updateChecker.custom('https://example.com/file.json', '1.0.0', false, 'version', 'download');`
</details>

<details>
  <summary>
    Small Helpers
  </summary>
  
  <b>fileExists</b>: Returns boolean on whether file exists.
  <br>Example: `sugarcube.fsutils.fileExists('./index.js')`
  <br><b>jsonValue</b>: Takes all arguments after the JSON file path to return a value.
  <br>Example: `sugarcube.fsutils.jsonValue('./package.json', 'scripts', 'test')`
</details>