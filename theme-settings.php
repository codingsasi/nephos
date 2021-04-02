<?php

/**
 * @file
 * Theme settings form for Nephos theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function nephos_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['nephos'] = [
    '#type' => 'details',
    '#title' => t('Nephos'),
    '#open' => TRUE,
  ];

  $form['nephos']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
