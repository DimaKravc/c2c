import React from 'react';
import Pattern from './defaultPattern';
import Preview from './loadedPreview';

export default class BackgroundPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            loadStatus: true,
            loaded: null
        };

        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleImageUpload(e) {
        let file = e.target.files[0];

        /*
         Check uploaded file format.
         Supported formats: jpg, png, svg
         */
        if (!/.(jpg|png|svg)$/gi.test(file.name)) {
            console.info('Unsupported format! Please choose (jpg, png, svg) file.');

            return false;
        }

        let reader = new FileReader();

        reader.onloadstart = (() => {
            this.setState({
                loadStatus: true
            });
        }).bind(this);

        reader.onload = (() => {
            this.props.callback({
                id: this.state.id,
                prop: reader.result
            });
        }).bind(this);

        reader.readAsDataURL(file);
    };

    handleChange(set) {
        this.props.callback(set);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.settings[this.state.id] !== nextProps.settings[this.state.id]
    }

    render() {
        return (
            <div className="picker__item">
                <div className="picker__header">
                    <label className="picker__label">{this.props.label}:</label>
                </div>
                <div className="picker__item-row">
                    <div className="picker__input-wrap">
                        <div className="input-file__wrap">
                            <form>
                                <input className="input-file"
                                       onChange={this.handleImageUpload}
                                       type="file"
                                       id={this.props.id} accept="image/*"/>
                                <label htmlFor={this.props.id}>{!this.props.settings[this.props.id] ? 'Загрузить изображение' : 'Загрузить другое'}</label>
                            </form>
                        </div>
                        <Pattern show={!this.props.settings[this.props.id]}/>
                        <Preview show={!!this.props.settings[this.props.id]}
                                 url={this.props.settings[this.props.id]}
                                 id={this.props.id}
                                 callback={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    };
}