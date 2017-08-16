import { render } from 'inferno';
import App from './App';

describe('Test component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<App />, div);
    });

});
