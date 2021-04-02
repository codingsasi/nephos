/**
 * Nephos.ts file
 */

declare var Drupal: any;
declare var jQuery: any;
let $ = jQuery;
import '../scss/nephos.scss';
import './if-you-want-to-write-js-code';

Drupal.behaviors.nephos = {
  attach: function () {
    console.log('TypeScript here! Jquery Works too.');
    console.log($('body').attr('class'));
  }
}
