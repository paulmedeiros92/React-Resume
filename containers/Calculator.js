import React from 'react';
import {Link} from 'react-router-dom';
import {setMessage} from "../actions/message";

export default class About extends React.Component {

    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    };

    calculate(size) {
        return size * 16;
    }

    render () {
        return (
            <div>
                About
                <Link to="/">
                    <button>Go Home</button>
                </Link>

                <div>
                    Calculator: calculate rem with root of 16 pixels
                    <input type="text" value={size}/>
                    <button onClick={this.calculate(size)}>Calculate</button>
                    <div>{this.calculate()}</div>
                </div>
            </div>
        )
    }
}