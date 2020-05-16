import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search'
Enzyme.configure({
  adapter: new Adapter()
})

describe('测试 Search', () => {
  // 测试集
  it('normal render', () => {
    let wrap = mount(<Search onSubmit={() => {}}/>)
    expect(() => {
      wrap.setProps({});
      wrap.unmount();
    }).not.toThrow();
  })
  it('container input ele', () => {
    let wrap = mount(<Search onSubmit={() => {}}/>) 
    let len = wrap.find('input').length;
    expect(len).toBe(1);
  })
  it('input change', () => {
    let wrap = mount(<Search onSubmit={() => {}}/>) 
    wrap.setState({ content: ''})
    let input = wrap.find('input');
    input.simulate('change', {
      target: {
        value: 'hhh'
      }
    })
    expect(wrap.state().content).toBe('hhh')
  })
  it('test onSubmit callback', () => {
    let fn = jest.fn();
    let wrap = mount(<Search onSubmit={fn}/>) 
    wrap.setState({ content: 'hhh' })
    let input = wrap.find('input')
    input.simulate('keyUp', {
      keyCode: 13
    })
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith('hhh')
  })
})