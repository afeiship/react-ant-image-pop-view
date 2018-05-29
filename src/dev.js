import './dev.scss';
import ReactAntImagePopView from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
