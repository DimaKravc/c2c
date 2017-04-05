import React from 'react';
import CSS from '../components/stylesheet';

export default class FrameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeShow: false
        };
        this.handleShowHtml = this.handleShowHtml.bind(this);
        this.handleHideHtml = this.handleHideHtml.bind(this);
        this.handleCopyUrl = this.handleCopyUrl.bind(this);
    }

    handleShowHtml(e) {
        e.preventDefault();

        this.setState({
            codeShow: true
        })
    };

    handleHideHtml(e) {
        e.preventDefault();
        let el = document.querySelector('.c2c-code__btn');
        el.classList.remove("disabled");
        el.text = 'скопировать';

        this.setState({
            codeShow: false
        })
    };

    componentDidMount() {
        this.range = document.createRange();
        this.urlKeeper = document.querySelector("[data-js='url']");
    };

    componentDidUpdate() {
        let frameHeight = document.getElementsByClassName('c2c')[0].offsetHeight;
        if (frameHeight != this.props.settings.frameHeight) {
            this.props.callback({
                id: 'frameHeight',
                prop: frameHeight
            });
        }
    }

    handleCopyUrl(e) {
        e.preventDefault();
        window.getSelection().removeAllRanges();

        if (!this.copyTrigger) this.copyTrigger = e.target;

        if (this.range.startContainer == document) {
            this.range.selectNode(this.urlKeeper);
        }
        window.getSelection().addRange(this.range);
        try {
            document.execCommand('copy');
            e.target.text = 'скопировано';
            e.target.className += ' disabled';
            setTimeout(
                function () {
                    let classesArr = this.copyTrigger.className.split(' '),
                        classIndex = classesArr.indexOf('disabled');
                    if (~classIndex) {
                        classesArr.splice(classIndex, 1);
                    }

                    this.copyTrigger.text = 'скопировать';
                    this.copyTrigger.className = classesArr.join(' ');
                }.bind(this),
            2000);
        } catch (err) {
            console.info('Oops, unable to copy');
        }

        window.getSelection().removeAllRanges();
    };

    render() {
        let settings = this.props.settings;
        return (
            <div style={{width: settings.frameWidth > settings.sizes[1] ? settings.sizes[1] : settings.frameWidth, margin: "auto"}} className={settings.frameWidth != settings.sizes[0] ? "size-sm" : "size-xs"}>
                <div className="controls-show">
                    <a href={"page.php?w=" + settings.frameWidth + "&h=" + settings.frameHeight} target="_blank">ОТКРЫТЬ ФРЕЙМ В ПОЛНОМ РАЗМЕРЕ</a>
                    <a href="#" onClick={this.handleShowHtml}>ПОКАЗАТЬ HTML</a>
                </div>
                <div className="c2c">
                    <CSS settings={this.props.settings}/>
                    <div className="c2c__inner-overlay">
                        <div className="c2c-code-wrap" style={{display: this.state.codeShow ? 'flex' : 'none'}}>
                            <a className="c2c-code__close" href="#" onClick={this.handleHideHtml}>&nbsp;</a>
                            <div className="c2c-code" data-js="url">&lt;iframe src="{settings.url}" width="{settings.frameWidth}" height="auto" frameBorder="0"/&gt;</div>
                            <a className="c2c-code__btn" href="#" onClick={this.handleCopyUrl}>СКОПИРОВАТЬ HTML</a>
                        </div>
                        <div className="block-phone" style={{display: settings.authByPhone ? 'block' : 'none'}}>
                            <div className="block-phone-wrap">
                                <label htmlFor="phone">Ваш номер телефона:</label>
                                <div className="wrap-phone-input">
                                    <input type="phone" id="phone" placeholder="+7 (232) 234-45-56"/>
                                </div>
                            </div>
                        </div>
                        <div className="main-block-transfer">
                            <div className="block-cards">
                                <div className="block-cards__card-one animated fadeInLeft">
                                    <div className="block-cards__card-one__arrow"></div>
                                    <div className="block-cards__card-one__wrap">
                                        <div className="block-cards__card-one__wrap__change-card">
                                            <span className="icon-io icon-my-cards">&nbsp;</span>Моикарты
                                        </div>
                                        <div className="block-cards__card-one__wrap__new-card active">
                                            <span className="icon-io icon-new-card">&nbsp;</span>Новая карта
                                        </div>
                                    </div>
                                    <div className={"block-cards__card-one__card card-sender-style" + (settings.cardBg === "cardImage" ? " img-bg" : "")}>
                                        <div className="wrap-mps">
                                            <div className="bank-logo">
                                                <i className="bank-icon animated">&nbsp;</i>
                                            </div>
                                            <div className="block-cards__card-one__card__mps">
                                                <i className="mps-icon animated">&nbsp;</i>
                                            </div>
                                        </div>
                                        <div className="block-cards__card-one__card__card-number">
                                            <label htmlFor="card_num">Номер карты:</label>
                                            <div className="block-cards__card-one__card__card-number__wrap-input border-bottom">
                                                <input type="text" placeholder="0000 0000 0000 0000" id="card_num"/>
                                            </div>
                                        </div>
                                        <div className="block-cards__card-one__card__expire-date">
                                            <label htmlFor="expire_date">Срок действия:</label>
                                            <div className="block-cards__card-one__card__expire-date__wrap-input border-bottom">
                                                <input placeholder="04/18" id="expire_date"/>
                                            </div>
                                        </div>
                                        <div className="block-cards__card-one__card__cvc">
                                            <label htmlFor="cvc">cvc/cvv2:<span className="cvc-icon"><i
                                                className="cvc-icon__help">3 последние цифры на оборотной стороне карты</i></span></label>
                                            <div className="block-cards__card-one__card__cvc__wrap-input border-bottom">
                                                <input type="text" placeholder="•••" id="cvc"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-cards__card-two">
                                    <div className="animated fadeInRight">
                                        <div className={"block-cards__card-two__card  card-recipient-style" + (settings.cardBg === 'cardImage' ? " img-bg" : '')}>
                                            <div className="wrap-mps">
                                                <div className="bank-logo">
                                                    <i className="bank-icon animated">&nbsp;</i>
                                                </div>
                                                <div className="block-cards__card-two__card__mps">
                                                    <i className="mps-icon animated">&nbsp;</i>
                                                </div>
                                            </div>
                                            <div className="block-cards__card-two__card__card-number">
                                                <label htmlFor="card_num_two">Номер карты:</label>
                                                <div className="block-cards__card-two__card__card-number__wrap-input border-bottom">
                                                    <input type="text" placeholder="0000 0000 0000 0000"
                                                           id="card_num_two"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-sum">
                                <div className="block-sum__sum-total">
                                    <label htmlFor="sum_total">Сумма перевода:</label>
                                    <input type="text" placeholder="1000.00" id="sum_total"/>
                                    <span className="block-sum__sum-total__text-info">Минимальная сумма: 100 <span className="ruble">q</span></span>
                                </div>
                                <div className="block-sum__sum-commission">
                                    <span className="block-sum__sum-commission__name">Сумма с комиссией:</span>
                                    <div className="block-sum__sum-commission_sum_com">1000.00 <span className="ruble">q</span></div>
                                    <div className="block-sum__sum-commission__commission-block">
                                        <div className="block-sum__sum-commission__commission-block__text">Комиссия:</div>
                                        <div className="block-sum__sum-commission__commission-block__commission">156.23<span className="ruble">q</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-btn-pay">
                            <input type="submit" value="Перевести"/>
                            <div className="block-btn-pay__text-info">Нажимая на кнопку «Перевести»,<br />
                                вы соглашаетесь c условиями публичной <a href="#">оферты.</a>
                            </div>
                        </div>
                        <footer>
                            <div className="footer-info">
                                <div className="left-column">
                                    <div className="logo"></div>
                                    <div className="feedback">Обратная связь</div>
                                </div>
                                <div className="right-column">
                                    <div className="pci"></div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}