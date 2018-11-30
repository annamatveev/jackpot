/**
 *
 * Asynchronously loads the component for WithEvents
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
