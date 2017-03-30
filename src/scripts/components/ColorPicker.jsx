import React from 'react';
import {CustomPicker} from 'react-color';
import {EditableInput, Saturation, Hue,} from 'react-color/lib/components/common';
import color from 'react-color/lib/helpers/color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false,
            id: this.props.id
        };

        this.handlePreset = this.handlePreset.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleOpen() {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    };

    handleClose(e) {
        this.setState({
            displayColorPicker: false
        });
    };

    handleChange(data, e) {
        if (data.inputValue != undefined) {
            e.target.value = data.inputValue.indexOf('#') !== 0 ? '#' + e.target.value : e.target.value;

            if (color.isValidHex(data.inputValue)) {
                this.props.callback({
                    id: this.state.id,
                    prop: data.inputValue
                })
            }

        } else if (data.h != undefined && data.s != undefined && data.a != undefined) {

            let colorSet = color.toState(data);

            this.props.callback({
                id: this.state.id,
                prop: colorSet.hex
            });
        }
    };

    handlePreset(e) {
        this.props.callback({
            id: this.state.id,
            prop: e.target.getAttribute('color')
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.settings[this.state.id] !== nextProps.settings[this.state.id] || this.state !== nextState
    };

    render() {
        
        let settings = this.props.settings,
            id = this.props.id,
            currentColorSet = settings[id] !== null ? color.toState(settings[id]) : settings[id],
            isInitial = currentColorSet === null,
            self = this,
            presets;

        if (this.props.presets) {
            presets = this.props.presets.map(function (item, index) {
                return (
                    <div color={item} className={item === '#ffffff' ? 'picker__preset-color style-border' : 'picker__preset-color'}
                         style={{backgroundColor: item}} key={index} onClick={self.handlePreset}></div>
                )
            })
        }

        return (
            <div className="picker__item">
                <div className="picker__header">
                    <label className="picker__label">{this.props.label}:</label>
                </div>
                <div className="picker__item-row">
                    <div className="picker__input-wrap">
                        <EditableInput className="picker__input" label="inputValue"
                                       value={isInitial ? '#' : currentColorSet.hex}
                                       onChange={ this.handleChange }/>
                    </div>
                    { this.state.displayColorPicker ?
                        <div className="picker__trigger-close" onClick={ this.handleClose }></div>
                        : null}
                    <div className="picker__trigger-wrap">
                        <div className="picker__trigger"
                             style={{background: isInitial ? '' : currentColorSet.hex, borderColor: isInitial ? '' : currentColorSet.hex}}
                             onClick={ this.handleOpen }></div>
                        { this.state.displayColorPicker ?
                            <div className="picker__popup">
                                <span className="picker__popup-title">Выберите цвет:</span>
                                <div className="picker__popup-saturation">
                                    <Saturation {...isInitial ? this.props : currentColorSet }
                                        onChange={ this.handleChange }/>
                                </div>
                                <div className="picker__popup-hue">
                                    <Hue {...isInitial ? this.props : currentColorSet } onChange={ this.handleChange } direction="vertical" />
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
                {presets}
            </div>
        )
    };
}

export default CustomPicker(ColorPicker);
