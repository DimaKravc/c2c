import React from 'react';

export default class SettingFeatures extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(data) {
        this.props.callback({
            id: data.target.id,
            prop: !this.props.settings.authByPhone
        });
    }

    render (){
        return (
            <div className="setting-item frame-width">
                <div className="setting-item__header">
                    <h3 className="setting-item__title">Функционал</h3>
                </div>
                <input className="input-checkbox" type="checkbox" id="authByPhone" value={this.props.settings.authByPhone ? 'on' : 'off'} onChange={this.handleChange}/>
                <label htmlFor="authByPhone">
                    <span className="i-checkbox">&nbsp;</span>
                    <span className="i-checkbox-active">&nbsp;</span>
                    Авторизация по номеру телефона
                </label>
            </div>
        )
    }
}