# Drupal Webpack

This is an example of using webpack in Drupal theme. This template is for transpiling SCSS to CSS and transpiling typescript to JavaScript.

## Usage

1. Download this theme into your `themes/custom` directory. This theme is named "nephos", after the greek goddess of the internet. But you can use the bash script to change the name quite easily.
2. Run `npm install`.
3. Start working on your theme. The SCSS files are in the `scss` folder and TypeScript files are in the `js` folder. You can write code in JS as well, just remember to import it in nephos.ts file because that's the "entry".
4. run `npm run build --mode=development` and the compiled files will be in this `dist` folder.
5. Use the bash script `change-theme-name.sh` to refactor the theme name.

### Notes
- A similar but different webpack starter kit is available here: https://github.com/hussainweb/drupal-bootstrap-webpack which helped in creating this one as well.
- [Tiny timer](https://www.npmjs.com/package/tiny-timer) is added as an example and is not required for this.
