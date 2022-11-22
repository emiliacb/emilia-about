import { queryByText, fireEvent } from '@testing-library/dom';
import { fixture, html } from '@open-wc/testing-helpers';

import '../nav.js';

const render = () => fixture(html`<nav-wc></nav-wc>`);

describe('Nav test suite', () => {
  it('Should render sections links', async () => {
    const component = await render();
    const section = queryByText(component, 'Education');
    expect(section).toBeDefined();
  });
  it('Should deactivate animations', async () => {
    window.setTimeout = jest.fn((cb) => cb());
    const component = await render();
    const ariaLiveFeedback = component.querySelector('#aria-live-feedback');
    fireEvent.click(queryByText(component, 'Deactivate animations'));
    expect(ariaLiveFeedback.ariaLive).toBe('off');
    expect(queryByText(component, 'Deactivate animations')).toBeNull();
  });
  it('Should render sections links', async () => {
    const component = await render();
    delete window.location;
    window.location = { assign: jest.fn() };
    fireEvent.click(queryByText(component, 'Contact'));
    expect(window.location.assign).toBeCalledWith('mailto:emiliacabralb@gmail.com');
  });
});
