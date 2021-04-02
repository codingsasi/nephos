/**
 * Nephos.ts file
 */

declare var Drupal: any;
declare var jQuery: any;

let $ = jQuery;
import '../scss/nephos.scss';
import {something} from './if-you-want-to-write-js-code';
// Including a package that support TS.
import Timer from 'tiny-timer/dist/tiny-timer';

Drupal.behaviors.nephos = {
  attach: function () {
    console.log('TypeScript here! Jquery Works too.');
    console.log($('body').attr('class'));
    console.log(something);
    // Just to demo how to use a typescript package.
    const timer = new Timer({ interval: 1000, stopwatch: false });
    console.log(timer);
  }
}
