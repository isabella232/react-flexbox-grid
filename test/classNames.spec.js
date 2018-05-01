import expect from 'expect';
import style from 'flexboxgrid2';
import getClass from '../src/classNames';

describe('classNames lookups', () => {
  it('translates known styles', () => {
    expect(getClass('vydia-col-xs')).toEqual(style['vydia-col-xs']);
  });
  it('falls back to returning unknown classnames', () => {
    expect(getClass('blah-blah-blah')).toEqual('blah-blah-blah');
  });
});
