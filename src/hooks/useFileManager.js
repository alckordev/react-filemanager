import { useState, useEffect } from 'react'

const useFileManager = ({ setFieldValue, plugin }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [target, setTarget] = useState('')

  useEffect(() => {
    if (!setFieldValue || typeof setFieldValue !== 'function') {
      throw new Error(`The setFieldValue isn't an function.`)
    }
  }, [])

  const handleFilemanager = (target) => {
    setTarget(target)
    setIsOpen(true)
    window.addEventListener('message', handleMessage)
  }

  const handleMessage = (e) => {
    const data = e.data

    if (data.sender === 'responsivefilemanager') {
      switch (plugin) {
        case 'formik':
          setFieldValue(data.field_id, data.url, true)
          break
        default:
          setFieldValue(data.url)
          break
      }
      setTarget('')
      setIsOpen(false)
      window.removeEventListener('message', handleMessage)
    }
  }

  return { isOpen, target, handleFilemanager }
}

export { useFileManager }
