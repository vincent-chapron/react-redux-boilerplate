import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement} from '../../redux/modules/counter/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.decrement}>-</button>
                {this.props.counter}
                <button onClick={this.props.increment}>+</button>
            </div>
        );
    }
}

function mapStateToProps({counter}) {
    return {counter}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({increment, decrement}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
