import React from 'react';
import SettingsView from './view/SettingsView';
import FrameView from './view/FrameView';
import ModalCard from './view/ModalCard';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizes: [320, 665, 1366, 1600, 1920],
            frameWidth: 665,
            frameHeight: 575,
            frameBgColor: null,
            cardUnderBgColor: null,
            controlsColor: null,

            bankSettings: true,
            bankSettingsType: "color",

            cardSettingsShow: false,
            cardSenderColor: null,
            cardRecipientColor: null,
            cardFieldSenderColor: null,
            cardFieldRecipientColor: null,
            cardSenderStrokeColor: null,
            cardRecipientStrokeColor: null,
            cardBg: 'cardColor',

            cardSenderImage: null,
            cardRecipientImage: null,

            authByPhone: true,
            url: "https://checkout.paymo.ru/card2cardframe/?api_key=" + window.api_key,
            
            showModalCard: false
        };

        this.defaultState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };

    handleChange(set) {
        this.setState({
            [set.id]: set.prop
        })
    };

    handleReset(e) {
        e.preventDefault();
        this.setState(this.defaultState);
    };

    handleSave(e) {
        e.preventDefault();

        /* Ajax request code here */

        let saveTrigger = e.target;
        saveTrigger.text = 'сохранено';
        saveTrigger.className += ' disabled';

        setTimeout(
            function () {
                let classesArr = saveTrigger.className.split(' '),
                    classIndex = classesArr.indexOf('disabled');
                if (~classIndex) {
                    classesArr.splice(classIndex, 1);
                }

                saveTrigger.text = 'сохранить настройки';
                saveTrigger.className = classesArr.join(' ');
            },
            2000);
    };

    componentDidMount() {
        document.getElementsByClassName('app-preload')[0].style.display = 'none';
    };

    render() {
        return (
            <div className="frame-setting style-cover-app">
                <div className="container">
                    <header className="frame-setting__header">
                        <div>
                            <nav className="frame-setting__nav">
                                <div className="go-back">
                                    <a className="go-back__link" href="#">
                                        <span className="arrow-left go-back__col">&nbsp;</span>
                                        <span className="go-back__col">Вернуться в личный кабинет</span>
                                    </a>
                                </div>
                            </nav>
                            <div className="frame-setting__title">
                                <h1>Настройка фрейма перевода с карты на карту для магазина SHOP.RU <sup>beta</sup></h1>
                            </div>
                            <div className="frame-setting__logo">
                                <a href={"http://paymo.ru"} target="_blank">
                                    <img src={"img_opt/frame-customization/logo_black.svg"} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="frame-setting__title frame-setting__title_v_table">
                            <h1>Настройка фрейма перевода с карты на карту для магазина SHOP.RU <sup>beta</sup></h1>
                        </div>
                    </header>
                    <div className="frame-setting__primary">
                        <div className="frame-setting__primary-col">
                            <FrameView callback={this.handleChange} settings={this.state}/>
                        </div>
                        <div className="frame-setting__primary-col">
                            <SettingsView callback={this.handleChange} settings={this.state}/>
                        </div>
                    </div>
                    <div className="frame-setting__footer">
                        <a className="app-control" href="#" onClick={this.handleReset}>СБРОСИТЬ</a>
                        <a className="app-control type-fill" href="#" onClick={this.handleSave}>СОХРАНИТЬ НАСТРОЙКИ</a>
                    </div>
                </div>
                <ModalCard callback={this.handleChange} show={this.state.showModalCard} style={this.state.bankSettingsType}/>
            </div>
        )
    };
}