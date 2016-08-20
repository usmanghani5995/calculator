/**
 * Created by Usman Ghani on 8/18/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
        return (
            <div>
            <h1>This is one cool app!</h1>
        </div>
    );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);