import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { FileManager } from './FileManager'

Enzyme.configure({ adapter: new Adapter() })

describe('<FileManager />', () => {
  const wrapper = mount(
    <FileManager
      domain='https://www.responsivefilemanager.com'
      target='cover'
      isOpen
    />
  )

  it('renders without crashing', () => {
    expect(wrapper).not.toBeNull()
  })

  it('pathdialog should be {`filemanager/dialog.php`} by default', () => {
    expect(wrapper.props().pathdialog).toBe('filemanager/dialog.php')
  })

  it('type should be {2} by default', () => {
    expect(wrapper.props().type).toBe(2)
  })

  it('width should be {`100%`} by default', () => {
    expect(wrapper.props().width).toBe('100%')
  })

  it('height should be {500} by default', () => {
    expect(wrapper.props().height).toBe(500)
  })

  it('allows us to set props', () => {
    expect(wrapper.props().domain).toBe('https://www.responsivefilemanager.com')
    wrapper.setProps({ domain: 'http://devfran.com' })
    expect(wrapper.props().domain).toBe('http://devfran.com')
  })
})
