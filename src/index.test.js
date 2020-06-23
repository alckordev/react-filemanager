import { FileManager, useFileManager } from '.'

describe('<FileManager />', () => {
  it('is truthy', () => {
    expect(FileManager).toBeTruthy()
  })
})

describe('useFileManager()', () => {
  it('is truthy', () => {
    expect(useFileManager).toBeTruthy()
  })
})
