import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Col, { getColumnProps } from '../../src/components/Col';
import style from 'flexboxgrid2';

const renderer = TestUtils.createRenderer();

describe('Col', () => {
  it('Should add classes equals to props', () => {
    renderer.render(<Col xs={12} sm={8} md={6} lg={4} xl={2} />);
    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    expect(className).toContain(style['vydia-col-xs-12']);
    expect(className).toContain(style['vydia-col-sm-8']);
    expect(className).toContain(style['vydia-col-md-6']);
    expect(className).toContain(style['vydia-col-lg-4']);
    expect(className).toContain(style['vydia-col-xl-2']);
  });

  it('Computes the column properties', () => {
    expect(getColumnProps({ className: 'test', xs: 12, unknown: 'foo' })).toEqual({
      unknown: 'foo', className: `${style['vydia-col-xs-12']} test`
    });
  });

  it('Should add "first-*" class if "first" property is set', () => {
    renderer.render(<Col first="md"/>);
    expect(renderer.getRenderOutput().props.className).toContain(style['vydia-first-md']);
  });

  it('Should not replace class', () => {
    renderer.render(<Col className="foo" md={3} />);

    const { className } = renderer.getRenderOutput().props;

    expect(className).toContain('foo');
    expect(className).toContain(style['vydia-col-md-3']);
  });

  it('Should support auto-width', () => {
    renderer.render(<Col xs sm md lg xl />);
    const { className } = renderer.getRenderOutput().props;
    expect(className).toContain(style['vydia-col-xs']);
    expect(className).toContain(style['vydia-col-sm']);
    expect(className).toContain(style['vydia-col-md']);
    expect(className).toContain(style['vydia-col-lg']);
    expect(className).toContain(style['vydia-col-xl']);
  });

  it('Should support custom tag name', () => {
    renderer.render(<Col xs sm md lg xl tagName="li" />);

    expect(renderer.getRenderOutput().type).toBe('li');
  });
});
