import React, { useState } from 'react'
import { FileManager, useFileManager } from 'react-filemanager'

const App = () => {
  const [inputValue, setInputValue] = useState('')

  const setFieldValue = (val) => setInputValue(val)

  const filemanager = useFileManager({
    setFieldValue
  })

  return (
    <div>
      <input
        placeholder='https://...'
        type='text'
        name='image'
        value={inputValue}
        onFocus={() => filemanager.handleFilemanager('image')}
        onBlur={filemanager.toggle}
        readOnly // is recommended but not necessary
      />
      <button type='button' onClick={filemanager.toggle}>
        Toggle
      </button>

      <FileManager
        domain='https://www.responsivefilemanager.com'
        crossdomain
        target={filemanager.target}
        isOpen={filemanager.isOpen}
      />
    </div>
  )
}

export default App
