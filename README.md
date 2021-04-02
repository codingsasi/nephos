# Drupal Webpack

This is an example of using webpack in Drupal theme. This template is for compiling SCSS to CSS and transpiling typescript to JavaScript.

## Usage

1. Download this theme into your `themes/custom` directory. This theme is named "nephos", after the greek goddess of the internet. I'll try to add a bash script to rename it to whatever you prefer.
2. Run `npm install`.
3. Start working on your theme. The SCSS files are in the `scss` folder and TypeScript files are in the `js` folder. You can write code in JS as well, just remember to import it in nephos.ts file because that's the "entry".
4. run `npm run build --mode=development` and the compiled files will be in this `dist` folder.