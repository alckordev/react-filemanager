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
        type='text'
        name='image'
        value={inputValue}
        onFocus={() => filemanager.handleFilemanager('image')}
        readOnly
      />
      <FileManager
        domain='http://devfran.com'
        target={filemanager.target}
        isOpen={filemanager.isOpen}
      />
    </div>
  )
}

export default App
