import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import NxRandomAvatar from '@jswork/next-random-avatar';
import ReactAntImagePopView from '../src/main';
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
