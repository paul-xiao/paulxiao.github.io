import React from 'react';
import './index.css';
import '../../index.css';
import '../../styles/common.scss';

class App extends React.Component {
  render() {
    return <div>
           {this.props.children}
    </div>
  }
}
export default App;
