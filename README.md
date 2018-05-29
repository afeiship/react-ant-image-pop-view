# react-ant-image-pop-view
> Ant popover view image for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    placement: PropTypes.string,
    size: PropTypes.array,
    popSize: PropTypes.array,
    urls: PropTypes.array,
  };

  static defaultProps = {
    placement: "rightTop",
    size: ['100px'],
    popSize: ['100px'],
    urls: []
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-image-pop-view --registry=https://registry.npm.taobao.org
```

```js
import ReactAntImagePopView from 'react-ant-image-pop-view';
```

```scss
// customize your styles:
$react-ant-image-pop-view-options:(
);

@import 'node_modules/react-ant-image-pop-view/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ant-image-pop-view --save
// import : import ReactAntImagePopView from 'react-ant-image-pop-view'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-ant-image-pop-view">
        <ReactAntImagePopView
          urls={[
            'http://placeholder.qiniudn.com/80x80',
            'http://placeholder.qiniudn.com/150x150'
          ]}
          size={['100px', '100px']}
          ref='rc' />
      </div>
    );
  }
}

```
