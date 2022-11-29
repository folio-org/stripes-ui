import setupApplication from '@folio/stripes-core/test/bigtest/helpers/setup-application';

export default function setupCoreApplication(options = {}) {
  options.mirageOptions = { serverType: 'miragejs' };
  setupApplication(options);
}
