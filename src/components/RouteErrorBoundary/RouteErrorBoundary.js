/**
 * RouteErrorBoundary
 */

import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { ErrorBoundary } from '@folio/stripes-components';

import { coreEvents, ModulesContext, StripesContext, getEventHandlers } from '@folio/stripes-core';

const RouteErrorBoundary = ({ children, escapeRoute, moduleName, isSettings }) => {
  const intl = useIntl();
  let buttonLabelId;

  const modules = useContext(ModulesContext);
  const stripes = useContext(StripesContext);

  if (moduleName) {
    if (isSettings) {
      buttonLabelId = 'stripes-ui.routeErrorBoundary.goToModuleSettingsHomeLabel';
    } else {
      buttonLabelId = 'stripes-ui.routeErrorBoundary.goToModuleHomeLabel';
    }
  } else {
    buttonLabelId = 'stripes-ui.routeErrorBoundary.goToAppHomeLabel';
  }

  const handleReset = () => {
    window.location.replace(escapeRoute);
  };

  /**
   * handleError
   * Callback from ErrorBoundary's componentDidCatch method. Pass along
   * the values received there to any functions that are registered to
   * listen to events.ERROR.
   */
  const handleError = (error, info) => {
    const handlers = getEventHandlers(coreEvents.ERROR, stripes, modules.handler, {});
    handlers.forEach(handleEvent => {
      handleEvent(error, info);
    });
  };

  return (
    <ErrorBoundary
      subTitle={intl.formatMessage({ id: 'stripes-ui.routeErrorBoundary.sub' })}
      resetButtonLabel={intl.formatMessage({ id: buttonLabelId }, { name: moduleName })}
      onReset={handleReset}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};

RouteErrorBoundary.propTypes = {
  children: PropTypes.node,
  escapeRoute: PropTypes.string,
  moduleName: PropTypes.node,
  isSettings: PropTypes.bool,
};

RouteErrorBoundary.defaultProps = {
  escapeRoute: '/'
};

export default RouteErrorBoundary;
