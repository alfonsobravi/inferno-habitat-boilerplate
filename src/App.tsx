import {
    linkEvent,
    version
} from 'inferno';
import Component from 'inferno-component';

import './App.css';
import Logo from './logo';

function handleClick(instance, event) {
    console.info('Hey', instance, event);
}

export default class App extends Component<any, any> {

    constructor(
        public props,
        public context
    ) {
        super(props, context);
    }

    public render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Logo width="40" height="40"/>
                    <h1>Hello {this.props.name}!</h1>
                    <h2>{`Welcome to Inferno ${version}`}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                    <br/>
                    <button onClick={linkEvent(this, handleClick)}>Click me!</button>
                </p>
            </div>
        );
    }

}
