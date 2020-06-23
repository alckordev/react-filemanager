import React from 'react'
import { FileManager } from './FileManager'

describe('<FileManager />', () => {
  const component = (
    <FileManager
      domain='https://www.responsivefilemanager.com'
      target='image'
      isOpen={false}
    />
  )

  it('renders', () => {
    expect(component).not.toBeNull()
  })
})
