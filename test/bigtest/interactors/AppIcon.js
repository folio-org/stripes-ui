/**
 * AppIcon interactor
 */

import { interactor, isPresent, find, text, property, attribute } from '@bigtest/interactor';

const iconClassSelector = '[class^="appIcon---"]';

export default interactor(class AppIconInteractor {
  static defaultScope = iconClassSelector;

  hasImg = isPresent('img');
  img = find('img');
  label = text();
  tag = property('tagName');
  className = attribute('class');
});
