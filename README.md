# react-ant-image-pop-view
> Ant popover view image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-image-pop-view
```

## properties
| Name      | Type   | Required | Default    | Description                           |
| --------- | ------ | -------- | ---------- | ------------------------------------- |
| className | string | false    | -          | The extended className for component. |
| placement | string | false    | 'rightTop' | Placement for antd.                   |
| size      | array  | false    | [100]      | Thumbnail size.                       |
| popSize   | array  | false    | [100]      | Popup picture size.                   |
| thumbnail | string | false    | -          | The thumbnail/popup pictures.         |
| src       | string | true     | -          | The popup original picutrel.          |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-image-pop-view/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-image-pop-view/dist/style.scss";

  // customize your styles:
  $react-ant-image-pop-view-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import NxRandomAvatar from '@jswork/next-random-avatar';
  import ReactAntImagePopView from '@jswork/react-ant-image-pop-view';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      const img = NxRandomAvatar.lego();
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-image-pop-view">
          <ReactAntImagePopView
            thumbnail={img}
            src={img}
            size={[100, 100]}
            popSize={[300, 300]}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-image-pop-view/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-image-pop-view/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-image-pop-view
[version-url]: https://npmjs.org/package/@jswork/react-ant-image-pop-view

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-image-pop-view
[license-url]: https://github.com/afeiship/react-ant-image-pop-view/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-image-pop-view
[size-url]: https://github.com/afeiship/react-ant-image-pop-view/blob/master/dist/react-ant-image-pop-view.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-image-pop-view
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-image-pop-view
