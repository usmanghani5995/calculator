import React from 'react';
import {render} from 'react-dom';
var Header = require('./header.js');
var ContentBox = require('./contentBox.js');

var SupportBox = React.createClass({
    render: function () {
        return(
            <div id="supportBox">
                <div className="header">
                    <Header/>
                </div>
                <div className="contentbox">
                    <ContentBox/>
                </div>
            </div>
        );
    }
});

export default SupportBox;
