import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  domain: PropTypes.string.isRequired,
  pathdialog: PropTypes.string,
  type: PropTypes.number,
  crossdomain: PropTypes.bool,
  target: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const defaultProps = {
  pathdialog: 'filemanager/dialog.php',
  type: 2,
  width: '100%',
  height: 500
}

const FileManager = ({
  domain,
  pathdialog,
  type,
  crossdomain,
  target,
  isOpen,
  width,
  height
}) => {
  if (!isOpen) return null

  return (
    <iframe
      title='File Manager'
      width={width}
      height={height}
      src={`${domain}/${pathdialog}?type=${type}&field_id=${target}&crossdomain=${crossdomain}`}
      frameBorder='0'
    />
  )
}

FileManager.propTypes = propTypes
FileManager.defaultProps = defaultProps

export { FileManager }
