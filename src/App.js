import { version, linkEvent } from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';

function handleClick(instance, event) {
  console.log('Hey', instance, event);
}

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h1>Hello {this.props.name}!</h1>
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          <button onClick={ linkEvent(this, handleClick) }>Click me!</button>
        </p>
      </div>
    );
  }
  
}
