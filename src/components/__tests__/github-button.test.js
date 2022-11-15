import { queryByText } from '@testing-library/dom';
import { fixture, html } from '@open-wc/testing-helpers';

import '../github-button';

const render = () => fixture(html`<github-button-wc></github-button-wc>`);

describe('Github button test suite', () => {
  it('Should render correctly', async () => {
    const component = await render();
    const button = queryByText(component, 'Github');
    expect(button).toBeDefined();
  });
});
