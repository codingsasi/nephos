export var something = function () {
  console.log("This one is exported!!!");
  return 123123123;
}
(function ($, Drupal) {

  'use strict';

  /**
   * Behavior description.
   */
  Drupal.behaviors.youCanRemoveThis = {
    attach: function (context, settings) {
      console.log('JavaScript here!');
    }
  };

} (jQuery, Drupal));
