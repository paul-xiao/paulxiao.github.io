import React from 'react';
import './index.css';

class App extends React.Component {
  render() {
    return <div>
           {this.props.children}
    </div>
  }
}
export default App;
