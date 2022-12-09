/* This component is rendered in the stripes-core MainNav
* It will either render a home link (CurrentApp) or an AppContextDropdown if the
* dropdown is used by the current ui-module.
*/

import React from 'react';
import PropTypes from 'prop-types';

import { withAppCtxMenu } from '@folio/stripes-core';

import AppContextDropdown from './AppContextDropdown';
import CurrentApp from './CurrentApp';

const CurrentAppGroup = ({ displayDropdownButton, selectedApp, config }) => {
  if (displayDropdownButton) {
    return (
      <AppContextDropdown selectedApp={selectedApp} />
    );
  }

  return (
    <CurrentApp
      id="ModuleMainHeading"
      config={config}
      currentApp={selectedApp}
    />
  );
};

CurrentAppGroup.propTypes = {
  config: PropTypes.object.isRequired,
  displayDropdownButton: PropTypes.bool,
  selectedApp: PropTypes.shape(
    {
      displayName: PropTypes.string,
      home: PropTypes.string,
      iconData: PropTypes.object, // Only used by "Settings" since it's not a standalone app yet
      name: PropTypes.string,
      route: PropTypes.string,
    }
  ),
};

export default withAppCtxMenu(CurrentAppGroup);
