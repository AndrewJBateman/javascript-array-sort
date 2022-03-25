# :zap: Javascript Array Sort

* Wes Bos Youtube Tutorial: [JavaScript Practice: Sorting Band Names without articles - #JavaScript30 17/30](https://www.youtube.com/watch?v=PEEo-2mRQ7A&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=17).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/javascript-array-sort?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/javascript-array-sort?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/javascript-array-sort?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/javascript-array-sort?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Javascript Array Sort](#zap-javascript-array-sort)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Tutorial Code to sort HTML elements based based on their text content.

## :camera: Screenshots

![Example screenshot](./img/bands.png).

## :signal_strength: Technologies

* [Javascript ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## :computer: Code Examples

* Functions to remove articles & alphabetisize.

```javascript
// replace articles a, an & the with nothing, note space after articles in regex expression
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// sort in alphabetical order 
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1); 
```

## :cool: Features

* flex background, regex function can be added to.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing

## :clap: Inspiration

* Wes Bos Youtube Tutorial: [JavaScript Practice: Sorting Band Names without articles - #JavaScript30 17/30](https://www.youtube.com/watch?v=PEEo-2mRQ7A&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=17).

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
