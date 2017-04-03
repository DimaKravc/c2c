import React from 'react';
import ColorPicker from '../components/ColorPicker';
import BackgroundPicker from '../components/background-picker/BackgroundPicker';

export default class CardColors extends React.Component {
    constructor(props) {
        super(props);

        this.handleTab = this.handleTab.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleTab(e) {
        e.preventDefault();

        this.props.callback({
            id: 'cardBg',
            prop: e.target.id
        });
    };

    handleChange(set) {
        this.props.callback(set);
    }

    render() {

        let settings = this.props.settings,
            activeTab = settings['cardBg'];

        return (
            <div className="setting-item" style={{display: this.props.settings.cardSettingsShow ? 'block' : 'none'}}>
                <div className="setting-item__header">
                    <h3 className="setting-item__title">Настройки карт</h3>
                    <ul className="setting-tabs">
                        <li className={activeTab == 'cardColor' ? 'setting-tabs__item state-active' : 'setting-tabs__item'}>
                            <a href="#" id="cardColor" onClick={this.handleTab}>ЦВЕТ</a>
                        </li>
                        <li className={activeTab == 'cardStroke' ? 'setting-tabs__item state-active' : 'setting-tabs__item'}>
                            <a href="#" id="cardStroke" onClick={this.handleTab}>Обводка</a>
                        </li>
                        <li className={activeTab == 'cardImage' ? 'setting-tabs__item state-active' : 'setting-tabs__item'}>
                            <a href="#" id="cardImage" onClick={this.handleTab}>ИЗОБРАЖЕНИЕ</a>
                        </li>
                    </ul>
                </div>
                <div className="picker" style={{display: activeTab == 'cardColor' ? 'block' : 'none'}}>
                    <div className="picker__col">
                        <h4 className="picker__title">Карта плательщика</h4>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings} label="Цвет карты"
                                     id="cardSenderColor"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет полей ввода"
                                     id="cardFieldSenderColor" presets={['#151a23', '#8791a2', '#ffffff']}/>
                    </div>
                    <div className="picker__col">
                        <h4 className="picker__title">Карта получателя</h4>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label='Цвет карты получателя'
                                     id="cardRecipientColor"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет полей ввода"
                                     id="cardFieldRecipientColor" presets={['#151a23', '#8791a2', '#ffffff']}/>
                    </div>
                </div>
                <div className="picker" style={{display: activeTab == 'cardStroke' ? 'block' : 'none'}}>
                    <div className="picker__col">
                        <h4 className="picker__title">Карта плательщика</h4>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings} label="Цвет обводки карты"
                                     id="cardSenderStrokeColor"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет полей ввода"
                                     id="cardFieldSenderColor" presets={['#151a23', '#8791a2', '#ffffff']}/>
                    </div>
                    <div className="picker__col">
                        <h4 className="picker__title">Карта получателя</h4>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет обводки карты"
                                     id="cardRecipientStrokeColor"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет полей ввода"
                                     id="cardFieldRecipientColor" presets={['#151a23', '#8791a2', '#ffffff']}/>
                    </div>
                </div>
                <div className="picker" style={{display: activeTab == 'cardImage' ? 'block' : 'none'}}>
                    <div className="picker__col">
                        <h4 className="picker__title">Карта плательщика</h4>
                        <BackgroundPicker callback={this.handleChange} settings={this.props.settings} 
                                          label="Цвет фона" id="cardSenderImage"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет полей ввода"
                                     id="cardFieldSenderColor" presets={['#151a23', '#8791a2', '#ffffff']}/>
                    </div>
                    <div className="picker__col">
                        <h4 className="picker__title">Карта получателя</h4>
                        <BackgroundPicker callback={this.handleChange} settings={this.props.settings}
                                          label="Цвет фона под картами"
                                          id="cardRecipientImage"/>
                        <ColorPicker callback={this.handleChange} settings={this.props.settings}
                                     label="Цвет полей ввода"
                                     id="cardFieldRecipientColor" presets={['#151a23', '#8791a2', '#ffffff']}/>
                    </div>
                </div>
            </div>
        )
    };
}