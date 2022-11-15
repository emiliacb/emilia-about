import { MockedLocalStorage } from '../../../mocks/classes';
import { toggleDarkMode } from '../';

window.localStorage = new MockedLocalStorage();

describe('Utils test suite', () => {
  it('Should return the correct content', () => {
    expect(localStorage.getItem('theme')).toStrictEqual(null);
    toggleDarkMode();
    expect(localStorage.getItem('theme')).toStrictEqual('dark');
    toggleDarkMode();
    expect(localStorage.getItem('theme')).toStrictEqual('light');
  });
});
