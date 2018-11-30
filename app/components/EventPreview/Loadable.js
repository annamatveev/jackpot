/**
 *
 * Asynchronously loads the component for EventPreview
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
