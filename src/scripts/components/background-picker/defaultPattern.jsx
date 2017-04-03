import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const defaultPattern = ({show}) => {
    return (
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={350}
            transitionLeaveTimeout={350}>
            {show && <div className="input-file__default"></div>}
        </ReactCSSTransitionGroup>
    );
};
export default defaultPattern;