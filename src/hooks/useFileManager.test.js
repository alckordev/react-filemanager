import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { useFileManager } from './useFileManager'

Enzyme.configure({ adapter: new Adapter() })

describe('useFileManager()', () => {
  let hook
  const HookWrapper = () => {
    hook = useFileManager({ setFieldValue: () => {} })
    return null
  }
  mount(<HookWrapper />)

  it('isOpen should be false by default', () => {
    expect(hook.isOpen).toBe(false)
  })

  it('isOpen should be target by default', () => {
    expect(hook.target).toBe('')
  })

  it('handleFilemanager is truthy', () => {
    expect(hook.handleFilemanager).toBeTruthy()
  })

  it('toggle is truthy', () => {
    expect(hook.toggle).toBeTruthy()
  })
})
