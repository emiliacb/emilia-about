import { LANG, SECTIONS, EVENTS, TRACKS_TYPES } from '../constants.js';

describe('Constants test suite', () => {
  it('Should LANG have the correct string', () => {
    expect(LANG).toStrictEqual({
      es: 'es',
      en: 'en',
      esPath: '/es',
    });
  });
  it('Should SECTIONS have the correct string', () => {
    expect(SECTIONS).toStrictEqual(['experience', 'education', 'projects', 'information']);
  });
  it('Should EVENTS have the correct string', () => {
    expect(EVENTS).toStrictEqual({
      homepage: {
        view: 'homepage/view',
      },
    });
  });
  it('Should TRACKS_TYPES have the correct string', () => {
    expect(TRACKS_TYPES).toStrictEqual({
      view: 'view',
    });
  });
});
