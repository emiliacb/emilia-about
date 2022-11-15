import { queryByRole } from '@testing-library/dom';
import { fixture, html } from '@open-wc/testing-helpers';

import '../';

const render = () => fixture(html`<homepage-wc></homepage-wc>`);

describe('Homepage test suite', () => {
  it('Should render correctly', async () => {
    const component = await render();
    const main = queryByRole(component, { role: 'main' });
    expect(main).toBeDefined();
  });
});
