import React from 'react';
import {render} from 'react-dom';

var KeyPad = React.createClass({
    render: function () {
        return(
            <div id="keyPad">
                <table>
                    <tr>
                        <td><button type="button">&#37;</button></td>
                        <td><button type="button">&radic;</button></td>
                        <td><button type="button">x&sup2;</button></td>
                        <td><button type="button">1/x</button></td>
                    </tr>
                    <tr>
                        <td><button type="button">CE</button></td>
                        <td><button type="button">C</button></td>
                        <td><button type="button">Del</button></td>
                        <td><button type="button">&#47;</button></td>
                    </tr>
                    <tr>
                        <td><button type="button">7</button></td>
                        <td><button type="button">8</button></td>
                        <td><button type="button">9</button></td>
                        <td><button type="button">&#42;</button></td>
                    </tr>
                    <tr>
                        <td><button type="button">4</button></td>
                        <td><button type="button">5</button></td>
                        <td><button type="button">6</button></td>
                        <td><button type="button">&#45;</button></td>
                    </tr>
                    <tr>
                        <td><button type="button">1</button></td>
                        <td><button type="button">2</button></td>
                        <td><button type="button">3</button></td>
                        <td><button type="button">&#43;</button></td>
                    </tr>
                    <tr>
                        <td><button type="button">rev</button></td>
                        <td><button type="button">0</button></td>
                        <td><button type="button">&#46;</button></td>
                        <td><button type="button">&#61;</button></td>
                    </tr>
                </table>
            </div>
        );
    }
});

export default KeyPad;
