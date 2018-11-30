/**
 *
 * Asynchronously loads the component for EventDrops
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
