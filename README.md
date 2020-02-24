# react-ant-image-pop-view
> Ant popover view image for react.

## installation
```shell
npm install -S @feizheng/react-ant-image-pop-view
```

## update
```shell
npm update @feizheng/react-ant-image-pop-view
```

## properties
| Name      | Type   | Default    | Description                           |
| --------- | ------ | ---------- | ------------------------------------- |
| className | string | -          | The extended className for component. |
| placement | string | 'rightTop' | Placement for antd.                   |
| size      | array  | ['100px']  | Thumbnail size.                       |
| popSize   | array  | ['100px']  | Popup picture size.                   |
| thumbnail | string | -          | The thumbnail/popup pictures.         |
| original  | string | -          | The popup original picutrel.          |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-image-pop-view/dist/style.scss";

  // customize your styles:
  $react-ant-image-pop-view-options: ()
  ```
2. import js
  ```js
  import ReactAntImagePopView from '@feizheng/react-ant-image-pop-view';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactAntImagePopView
            thumbnail="https://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg"
            original="https://himg.bdimg.com/sys/portrait/item/be10475f686d6x73db00.jpg"
            size={['100px', '100px']}
            popSize={[200, 200]}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-image-pop-view/

## resources
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
