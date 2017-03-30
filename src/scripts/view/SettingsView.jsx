import React from 'react';
import SFWidth from './SettingFrameWidth';
import SFColors from './SettingFrameColors';
import SCColors from './SettingCardColors';
import SFFeatures from './SettingFeatures';

export default class SettingsView extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(set) {
        this.props.callback(set);
    }

    render() {
        return (
            <div className="frame-setting__list">
                <SFWidth callback={this.handleChange} settings={this.props.settings} />
                <SFColors callback={this.handleChange} settings={this.props.settings} />
                <SCColors callback={this.handleChange} settings={this.props.settings} />
                <SFFeatures callback={this.handleChange} settings={this.props.settings} />
            </div>
        )
    };
}