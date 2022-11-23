import { queryByText, findByText, findByTestId, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { fixture, html } from '@open-wc/testing-helpers';

import '../nav.js';

// TODO this is not the best way for handling window in jest
delete window.location;
window.location = { assign: jest.fn() };

navigator.clipboard = {
  writeText: jest.fn(() => Promise.resolve()),
};

const render = () => fixture(html`<nav-wc></nav-wc>`);

describe('Nav test suite', () => {
  const user = userEvent.setup();

  it('Should render sections links', async () => {
    const component = await render();
    const section = queryByText(component, 'Education');
    expect(section).toBeDefined();
  });
  it('Should deactivate animations', async () => {
    const component = await render();
    const ariaLiveFeedback = component.querySelector('#aria-live-feedback');
    user.click(queryByText(component, 'Deactivate animations'));
    waitFor(() => expect(ariaLiveFeedback.ariaLive).toBe('off'));
    waitFor(() => expect(queryByText(component, 'Deactivate animations')).toBeNull());
  });
  it('Should ejecute mailto link onclick', async () => {
    const component = await render();
    user.click(queryByText(component, 'Contact'));
    waitFor(() => expect(window.location.assign).toBeCalledWith('mailto:emiliacabralb@gmail.com'));
  });
  it('Should ejecute mailto link onclick', async () => {
    const component = await render();
    const button = await findByTestId(component, 'button-copy');
    user.hover(button);
    const span = await findByText(component, 'Copy e-mail');
    waitFor(() => expect(span).toBeVisible());
    user.click(button);
    const iconSuccess = await findByTestId(component, 'button-icon-success');
    waitFor(() => expect(iconSuccess).toBeVisible());
    const iconClipboard = await findByTestId(component, 'button-icon-clipboard');
    waitFor(() => expect(iconClipboard).toBeVisible());
  });
});
