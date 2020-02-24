import ReactAntImagePopView from '../src/main';
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
          src="https://himg.bdimg.com/sys/portrait/item/be10475f686d6x73db00.jpg"
          size={['100px', '100px']}
          popSize={[200, 200]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
