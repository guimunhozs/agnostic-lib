import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { AgnosticLib } from '../src/AgnosticLib.js';
import '../agnostic-lib.js';

storiesOf('agnostic-lib', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(AgnosticLib))
  .add(
    'Alternative Title',
    () => html`
      <agnostic-lib .title=${'Something else'}></agnostic-lib>
    `,
  );
