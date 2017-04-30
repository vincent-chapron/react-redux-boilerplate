import React from 'react';
import {Component} from 'react';

export default function(ComposedComponent) {
    return class Example extends Component {
        test() {
            console.log('test');
        }

        render() {
            return <ComposedComponent {...this.props} t={this.test}/>
        }
    }
}
