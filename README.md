# react-filemanager

Using as stand-alone responsive filemanager for react &#128293;.

[![NPM](https://img.shields.io/npm/v/react-filemanager.svg)](https://www.npmjs.com/package/@alckor127/react-filemanager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requirements

Before starting using `react-filemanager`; download, install and configure responsive filemanager on an apache server.

- [Download](https://www.responsivefilemanager.com/index.php#download-section)
- [Documentation](https://www.responsivefilemanager.com/index.php#documentation-section)

## Install

```bash
npm install --save @alckor127/react-filemanager
```

## Usage

```jsx
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
        readOnly // is recommended
      />
      <FileManager
        domain='https://www.responsivefilemanager.com'
        target={filemanager.target}
        isOpen={filemanager.isOpen}
      />
    </div>
  )
}

export default App
```

## API Reference

<a name="use-filemanager-hook"></a>

#### `useFileManager()`

A custom React Hook that returns states and helpers for using with [`FileManager`](#filemanager-component) component.

- `isOpen` - is a boolean state indicating whether or not to show the filemanager.
- `target` - is a string state indicating the input name.
- `toggle()` - is a trigger function that controls filemanager independent visibility.
- `handleFileManager(target)` - this function is the one that relates the behavior of the filemanager to the input. Requires that the input name be sent to it.

##### Setting

`useFileManager`, receive an object in the following format:

```jsx
const [inputValue, setInputValue] = useState('')

const handleChangeInput = (val) => setInputValue(val)

const filemanager = useFileManager({
  setFieldValue: handleChangeInput
})
```

- `setFieldValue` - it is the function that must update the state of the input.
- `plugin` - it is not necessary to define it. Currently, you can assign the value `formik` to indicate to the hook that it should be integrated with [`formik`](https://jaredpalmer.com/formik/), in case it is assigned the value `formik`, please note that `setFieldValue` must also be [`formik`](https://jaredpalmer.com/formik/).

<a name="filemanager-component"></a>

#### `<FileManager />`

| Prop                               | Type           | Required | Description                                                                                              |
| :--------------------------------- | :------------- | :------: | :------------------------------------------------------------------------------------------------------- |
| [`domain`](#domain-prop)           | String         |    ✓     | It is the domain where the responsive filemanager was installed and configured.                          |
| [`pathdialog`](#pathdialog-prop)   | String         |          | It is the path name of `dialog.php` file. Default is `filemanager/dialog.php`.                           |
| [`type`](#type-prop)               | Integer        |          | It is the default filter indicator: 1 (images files), 2 (all files) and 3 (video files). Default is `2`. |
| [`crossdomain`](#crossdomain-prop) | Boolean        |          | Set it to `true` if you want to enable cross-domain file selector.                                       |
| [`target`](#target-prop)           | String         |    ✓     | It is provided by `useFileMananger()`.                                                                   |
| [`isOpen`](#is-open-prop)          | Boolean        |    ✓     | It is provided by `useFileMananger()`.                                                                   |
| [`width`](#width-prop)             | Integer/String |          | Set it the width of responsive filemanager. Default is `100%`.                                           |
| [`height`](#height-prop)           | Integer/String |          | Set it the height of responsive filemanager. Default is `500`.                                           |

<a name="domain-prop"></a>

#### domain (required)

It is the domain where the responsive filemanager was installed and configured.

```jsx
<FileManager
  domain='https://www.responsivefilemanager.com'
  target={filemanager.target} // useFileManager() return this value.
  isOpen={filemanager.isOpen} // useFileManager() return this value.
/>
```

<a name="pathdialog-prop"></a>

#### pathdialog

We will assume that in the responsive filemanager configuration on the server, the path of the `filemanager/dialog.php` file is changed to the following: `uploads/dialog.php`.

```jsx
<FileManager
  domain='https://www.responsivefilemanager.com'
  pathdialog='uploads/dialog.php'
  target={filemanager.target} // useFileManager() return this value.
  isOpen={filemanager.isOpen} // useFileManager() return this value.
/>
```

<a name="type-prop"></a>

#### type

For example if you want to show only the video files, then type must be set with the value of 3.

```jsx
<FileManager
  domain='https://www.responsivefilemanager.com'
  type={3}
  target={filemanager.target} // useFileManager() return this value.
  isOpen={filemanager.isOpen} // useFileManager() return this value.
/>
```

<a name="crossdomain-prop"></a>

#### crossdomain

For example to enable the cross-domain file selector, you must set `crossdomain` to `true`.

```jsx
<FileManager
  domain='https://www.responsivefilemanager.com'
  crossdomain
  target={filemanager.target} // useFileManager() return this value.
  isOpen={filemanager.isOpen} // useFileManager() return this value.
/>
```

<a name="target-prop"></a>

#### target (required)

The value of `target` is obtained through the hook [`useFileManager`](#use-filemanager-hook).

```jsx
const filemanager = useFileManager({
  setFieldValue: (val) => console.log(val)
})

<FileManager
  domain='https://www.responsivefilemanager.com'
  target={filemanager.target}
  isOpen={filemanager.isOpen}
/>
```

<a name="is-open-prop"></a>

#### isOpen (required)

The value of `isOpen` is obtained through the hook [`useFileManager`](#use-filemanager-hook).

```jsx
const filemanager = useFileManager({
  setFieldValue: (val) => console.log(val)
})

<FileManager
  domain='https://www.responsivefilemanager.com'
  target={filemanager.target}
  isOpen={filemanager.isOpen}
/>
```

## Examples

- [Basic](aaaaa)
- [Integration with formik](aaaaaa)
- [Only filemanager control](aaaa)

## License

MIT © [Alckor127](https://github.com/alckor127) 2020
