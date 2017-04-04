import React from 'react';
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/background-picker/BackgroundPicker';

export default class FrameColors extends React.Component {
    constructor(props) {
        super(props);

        this.handleCardSettings = this.handleCardSettings.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleModalCard = this.handleModalCard.bind(this);
    };

    handleCardSettings(e) {
        e.preventDefault();

        this.props.callback({
            id: 'cardSettingsShow',
            prop: !this.props.settings.cardSettingsShow

        });

        this.props.callback({
            id: 'bankSettings',
            prop: !this.props.settings.cardSettingsShow

        })
    };

    handleRadioChange(e) {
        this.props.callback({
            id: e.target.name,
            prop: e.target.value
        })
    };

    handleChange(set) {
        this.props.callback(set);
    };

    handleModalCard(e) {
        e.preventDefault();

        this.props.callback({
            id: "showModalCard",
            prop: true
        })
    }

    render() {
        return (
            <div className="setting-item">
                <div className="setting-item__header">
                    <h3 className="setting-item__title">Настройки ФОНА</h3>
                </div>
                <div className="picker">
                    <div className="picker__col">
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет фона"
                                     id="frameBgColor"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет кнопок и ссылок"
                                     id="controlsColor"/>
                    </div>
                    <div className="picker__col">
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет фона под картами"
                                     id="cardUnderBgColor"/>
                    </div>
                </div>
                <div className="bank-design" style={{display: this.props.settings.cardSettingsShow ? 'none' : 'block'}}>
                    <p>По умолчанию, карты меняют свой цвет в зависимости от банка, <br/>выпустившего карту. <a href="#" onClick={this.handleModalCard}>Как это работает?</a>
                    </p>
                    <div className="bank-design__form">
                        <div className="bank-design__formgroup">
                            <input name="bankSettingsType"
                                   type="radio"
                                   id="change_color"
                                   value="color"
                                   onChange={this.handleRadioChange}
                                   checked={this.props.settings.bankSettingsType == "color"}
                            />
                            <label htmlFor="change_color">
                                <span className="i-radio">&nbsp;</span>
                                <span className="i-radio-active">&nbsp;</span>
                                Смена цвета
                            </label>
                        </div>
                        <div className="bank-design__formgroup">
                            <input name="bankSettingsType"
                                   type="radio"
                                   id="change_stroke"
                                   value="stroke"
                                   onChange={this.handleRadioChange}
                                   checked={this.props.settings.bankSettingsType == "stroke"}
                            />
                            <label htmlFor="change_stroke">
                                <span className="i-radio">&nbsp;</span>
                                <span className="i-radio-active">&nbsp;</span>
                                Смена обводки
                            </label>
                        </div>
                    </div>
                </div>
                <a href="#" className="card-design-toggle" onClick={this.handleCardSettings}>
                    Я хочу сделать свой дизайн для карт
                    <i className={this.props.settings.cardSettingsShow ? "arrow-top" : "arrow-bottom"}>&nbsp;</i>
                </a>
            </div>
        )
    };
}