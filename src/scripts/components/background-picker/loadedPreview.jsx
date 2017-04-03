import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class BackgroundPicker extends React.Component {
    constructor(props) {
        super(props);

        this.handleImageRemove = this.handleImageRemove.bind(this);
    };

    handleImageRemove(e) {
        e.preventDefault();

        this.props.callback({
            id: this.props.id,
            prop: null
        })
    };

    render () {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={350}
                transitionLeaveTimeout={350}>
                {this.props.show &&  <div className="input-file__preview"
                               style={this.props.url && {backgroundImage: 'url("' + this.props.url + '")'}}>
                    <div className="input-file__clean-out" onClick={this.handleImageRemove}></div>
                </div>}
            </ReactCSSTransitionGroup>
        );
    }
}