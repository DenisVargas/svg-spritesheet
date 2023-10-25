# What is this?
Its a set of `custom components` that allows a user to insert `svg` content inside a html document at runtime with a single load, sourcing `symbol`'s defined in a file.

This is archived via `preload-svg` and `insert-svg` tags.

This approach gives you maximum flexibility since it makes insertion, re-usage and `css` styling of multiple icons or graphic resources really easy without loosing compatibility with traditional methods such as `svg` + `use` tags.

# Installing

Download js file from [Releases](https://github.com/DenisVargas/svg-spritesheet/releases)
or download repository & build locally:
```shell
npm install
//then...
npm run build
```
`svg-spritesheet.js` will be available inside `./dist` folder.

# Usage
1. Import `<script src="./path/to/your/svg-spritesheet.js"></script>` inside your `index.html` (or your entry point html).

2. Use `<preload-svg src="./path/to/your/target.svg"></preload-svg>` to load the `svg` file asynchronically with a single call.
	* It is intended to only have one file with all `icons` or graphics within `symbol` declarations.
	* The component will be replaced by an `svg` document with all `symbol`'s inside of it.

3. Use as many `<insert-svg symbol="your_Symbol_ID"></insert-svg>` as you want, these map directly to the contents of a declared `symbol`.
	* The component will be replaced by the contents of the `symbol`  inside a new `svg` declaration allowing full control of it stylings via `css`.
	* All `insert-svg` tags also supports optional `id`, `with`, `height` attributes. If defined, these are included in the final `svg` element as declared.

## Full example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Spritesheet usecase example</title>
    <script src="./dist/svg-spritesheet.js"></script>

</head>

<body>
    <script>
        document.addEventListener('svg-inserted', ()=>{
            console.log('all svg have been inserted');
        });
    </script>

    <preload-svg src="./assets/spritesheet_example.svg"></preload-svg>
    <insert-svg id="folder1" symbol="folder" width="100" height="100"></insert-svg>
    <insert-svg id="folder2" symbol="folder" width="100" height="100"></insert-svg>
    <insert-svg id="turnOff" symbol="turn_off" width="100" height="100"></insert-svg>
    <insert-svg id="turnOn" symbol="turn_on" width="100" height="100"></insert-svg>
    <insert-svg id="app" symbol="apps" width="100" height="100"></insert-svg>
</body>
</html>
```


# What is a `spritesheet_svg`?
An example file `spritesheet_example.svg`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 46">
  <defs>
    <symbol id="apps" viewBox="0 0 16 16">
      <path id="apps-2" data-name="apps" d="m2,16c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Zm6,0c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Zm6,0c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59ZM2,10c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Zm6,0c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Zm6,0c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59ZM2,4c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41S.2.98.59.59s.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Zm6,0c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Zm6,0c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41.2-1.02.59-1.41.86-.59,1.41-.59,1.02.2,1.41.59.59.86.59,1.41-.2,1.02-.59,1.41-.86.59-1.41.59Z"/>
    </symbol>
    <symbol id="folder" viewBox="0 0 20 16">
      <g>
        <polygon id="cross" points="13 12 15 12 15 10 17 10 17 8 15 8 15 6 13 6 13 8 11 8 11 10 13 10 13 12"/>
        <path id="folder_exterior" d="m2,16c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41V2C0,1.45.2.98.59.59s.86-.59,1.41-.59h6l2,2h8c.55,0,1.02.2,1.41.59s.59.86.59,1.41v10c0,.55-.2,1.02-.59,1.41s-.86.59-1.41.59H2Zm0-2h16V4h-8.83l-2-2H2v12Zm0,0V2v12Z"/>
      </g>
    </symbol>
    <symbol id="turn_off" data-name="turn off" viewBox="0 0 22 12">
      <path id="turn_off-2" data-name="turn off" d="m6,12c-1.67,0-3.08-.58-4.25-1.75-1.17-1.17-1.75-2.58-1.75-4.25S.58,2.92,1.75,1.75C2.92.58,4.33,0,6,0h10c1.67,0,3.08.58,4.25,1.75s1.75,2.58,1.75,4.25-.58,3.08-1.75,4.25-2.58,1.75-4.25,1.75H6Zm0-2h10c1.1,0,2.04-.39,2.83-1.18s1.18-1.73,1.18-2.83-.39-2.04-1.18-2.83-1.73-1.18-2.83-1.18H6c-1.1,0-2.04.39-2.83,1.18s-1.18,1.73-1.18,2.83.39,2.04,1.18,2.83,1.73,1.18,2.83,1.18Zm0-1c.83,0,1.54-.29,2.13-.88s.88-1.29.88-2.13-.29-1.54-.88-2.13-1.29-.88-2.13-.88-1.54.29-2.13.88-.88,1.29-.88,2.13.29,1.54.88,2.13,1.29.88,2.13.88Z"/>
    </symbol>
    <symbol id="turn_on" data-name="turn on" viewBox="0 0 22 12">
      <path id="turn_on-2" data-name="turn on" d="m6,12c-1.67,0-3.08-.58-4.25-1.75-1.17-1.17-1.75-2.58-1.75-4.25S.58,2.92,1.75,1.75C2.92.58,4.33,0,6,0h10c1.67,0,3.08.58,4.25,1.75s1.75,2.58,1.75,4.25-.58,3.08-1.75,4.25-2.58,1.75-4.25,1.75H6Zm0-2h10c1.1,0,2.04-.39,2.83-1.18s1.18-1.73,1.18-2.83-.39-2.04-1.18-2.83-1.73-1.18-2.83-1.18H6c-1.1,0-2.04.39-2.83,1.18s-1.18,1.73-1.18,2.83.39,2.04,1.18,2.83,1.73,1.18,2.83,1.18Zm10-1c.83,0,1.54-.29,2.13-.88s.88-1.29.88-2.13-.29-1.54-.88-2.13-1.29-.88-2.13-.88-1.54.29-2.13.88-.88,1.29-.88,2.13.29,1.54.88,2.13,1.29.88,2.13.88Z"/>
    </symbol>
  </defs>

  <use width="16" height="16" transform="translate(35 30)" xlink:href="#apps"/>
  <use width="20" height="16" transform="translate(1 29)" xlink:href="#folder"/>
  <use width="22" height="12" transform="translate(32)" xlink:href="#turn_off"/>
  <use width="22" height="12" xlink:href="#turn_on"/>
</svg>
```

As you can see, its simply a bunch of symbols exported in `svg` format, in this case this file was generated with Adobe Illustrator build-in exporter:
`<!-- Generator: Adobe Illustrator 27.6.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->`
All that is required is a file with `symbol`'s defined within. It will ignore all other elements.

# Why using this library?
Sometimes using the traditional approach isn't enough.
If you use `svg` + `use` tag, you can only change the fill via a `class`, but it will be applied to all internal elements. Additionally what if you want to reuse multiples instances of an icon but each one with individual distinctive colors, while retaining the first instance unchanged?
The best way of solving this issues, generally involves manually incrusting the contents of the `svg` file inside your document, in each location where you want control since this allows you to have full access to its internal clases and you can use `css` to style each instance independently of the other.
This library just make easy to export a file and use it without the need of editing anything, most of the setting can be done inside Illustrator.

## Recommended export settings inside Illustrator:
![imagen](https://github.com/DenisVargas/svg-spritesheet/assets/38993740/2c06ec12-4ed8-4726-b960-d9bb0bb30d8b)

