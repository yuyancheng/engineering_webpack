import react, {Component} from 'react';
import Render from 'react-dom';

// var show = require('./show.js');

// show('webpack');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        return (
            <div>Hello world!</div>
        )
    }
}

Render(<Main />, document.getElementById('container'));