import React from 'react';

export default class BackgroundPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        };

        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleImageRemove = this.handleImageRemove.bind(this);
    };

    handleImageUpload(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var self = this;

        reader.onload = function () {
            self.props.callback({
                id: self.state.id,
                prop: reader.result
            });
        };

        reader.readAsDataURL(file);
    };

    handleImageRemove(e) {
        e.preventDefault();

        this.props.callback({
            id: this.state.id,
            prop: null
        })
    };

    shouldComponentUpdate(nextProps) {
        return this.props.settings[this.state.id] !== nextProps.settings[this.state.id]
    }

    render() {

        let settings = this.props.settings,
            id = this.props.id,
            url = settings[id];

        return (
            <div className="picker__item">
                <div className="picker__header">
                    <label className="picker__label">{this.props.label}:</label>
                </div>
                <div className="picker__item-row">
                    <div className="picker__input-wrap">
                        <div className="input-file__wrap">
                            <form>
                                <input className="input-file" onChange={this.handleImageUpload} type="file"
                                       id={this.props.id} accept="image/*" />
                                <label
                                    htmlFor={this.props.id}>{!url ? 'Загрузить изображение' : 'Загрузить другое'}</label>
                            </form>
                        </div>
                        <div
                            className={url ? 'input-file__preview input-file__preview_state_loaded' : 'input-file__preview'}
                            style={url ? {backgroundImage: 'url("' + url + '")'} : null}>
                            {url ? <div className="input-file__clean-out" onClick={this.handleImageRemove}></div> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}