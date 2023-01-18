import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Route } from 'react-router-dom';

import { TitleManager, withStripes } from '@folio/stripes-core';

import RouteErrorBoundary from '../RouteErrorBoundary';

class TitledRoute extends React.Component {
  static propTypes = {
    component: PropTypes.element,
    computedMatch: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
    intl: PropTypes.shape({
      formatMessage: PropTypes.func,
    }),
    name: PropTypes.string
  };

  render() {
    const {
      name,
      component,
      computedMatch,
      intl,
      ...rest
    } = this.props;

    const componentWithExtraProps = computedMatch
      ? {
        ...component,
        props: {
          ...component.props,
          match: computedMatch,
        }
      }
      : component;

    return (
      <Route
        {...rest}
        render={() => (
          <RouteErrorBoundary escapeRoute="/">
            <TitleManager page={intl.formatMessage({ id: `stripes-ui.title.${name}`, defaultMessage: name })} />
            {componentWithExtraProps}
          </RouteErrorBoundary>
        )}
      />
    );
  }
}

export default withStripes(injectIntl(TitledRoute));
