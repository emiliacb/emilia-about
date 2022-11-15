import { getContent, toggleLanguage } from '../contents';

console.error = jest.fn();

describe('Contents utils test suite', () => {
  describe('getContent', () => {
    it('Should return the correct content', () => {
      expect(getContent('false.path.wording')).toStrictEqual('-');
      expect(console.error).toBeCalledWith('Missing wording false.path.wording');
    });
  });
  describe('toggleLanguage', () => {
    it('Should change de language', () => {
      const oldPushState = window.history.pushState;
      window.history.pushState = jest.fn().mockImplementation(oldPushState);

      toggleLanguage();
      expect(window.history.pushState).toHaveBeenLastCalledWith({}, '', '/es');
      expect(document.documentElement.getAttribute('lang')).toBe('es');
      toggleLanguage();
      expect(window.history.pushState).toHaveBeenLastCalledWith({}, '', '/en');
      expect(document.documentElement.getAttribute('lang')).toBe('en');
    });
  });
});
