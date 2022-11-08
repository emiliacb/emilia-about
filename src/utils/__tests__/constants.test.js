import { LANG, SECTIONS } from '../constants.js'

describe('Constants test suite', () => {
  it('Should LANG have the correct string', () => {
    expect(LANG).toStrictEqual({
      es: 'es',
      en: 'en',
      esPath: '/es',
    })
  })
  it('Should SECTIONS have the correct string', () => {
    expect(SECTIONS).toStrictEqual(['experience', 'education', 'projects', 'information'])
  })
})
