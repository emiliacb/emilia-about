import { getContent } from '../contents';

console.error = jest.fn();

describe('Contents utils test suite', () => {
  it('Should return the correct content', () => {
    expect(getContent('false.path.wording')).toStrictEqual('-');
    expect(console.error).toBeCalledWith('Missing wording false.path.wording');
  });
});
