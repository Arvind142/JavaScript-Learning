import React, { Component, Fragment } from 'react';

export default class AppHeader extends Component {
    render() {
        return (
            <Fragment>
                <h1>{this.props.title}</h1>
                <h3> {this.props.subheading} !</h3>
                <hr />
            </Fragment>
        );
    }
}