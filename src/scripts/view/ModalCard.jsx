import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const BANK_COLLECTION = [
    {
        bin: "1234 0000 0000 0000",
        bankIcon: "alfa",
        systemIcon: "visa",
        bg: "#ed3523"
    },
    {
        bin: "4158 8100 0000 0000",
        bankIcon: "rosevrobank",
        systemIcon: "visa",
        bg: "#5e2e50"
    },
    {
        bin: "3555 0000 0000 0000",
        bankIcon: "sovkom",
        systemIcon: "visa",
        bg: "#00467f"
    },
    {
        bin: "4321 2300 0000 0000",
        bankIcon: "binbank",
        systemIcon: "visa",
        bg: "#69aedf"
    },
    {
        bin: "5170 7900 0000 0000",
        bankIcon: "bsp",
        systemIcon: "mc",
        bg: "#db1e33"
    },
    {
        bin: "5304 0000 0000 0000",
        bankIcon: "otkrytie",
        systemIcon: "mc",
        bg: "#00bae3"
    },
    {
        bin: "5570 0000 0000 0000",
        bankIcon: "ceb",
        systemIcon: "mc",
        bg: "#dc3b41"
    },
    {
        bin: "5586 0000 0000 0000",
        bankIcon: "hmb",
        systemIcon: "mc",
        bg: "#005a51"
    },
    {
        bin: "1234 0000 0000 0000",
        bankIcon: "hcb",
        systemIcon: "mir",
        bg: "#e21837"
    },
    {
        bin: "2204 8800 0000 0000",
        bankIcon: "cmpb",
        systemIcon: "mir",
        bg: "#004772"
    },
    {
        bin: "1234 0000 0000 0000",
        bankIcon: "uniastrum",
        systemIcon: "mir",
        bg: "#005d70"
    },
    {
        bin: "4062 0000 0000 00000",
        bankIcon: "locko",
        systemIcon: "mir",
        bg: "#0054a5"
    }
];

export default class ModalDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleModalCard = this.handleModalCard.bind(this);
    };

    handleModalCard(e) {
        e.preventDefault();

        this.props.callback({
            id: "showModalCard",
            prop: false
        })
    }

    componentDidUpdate() {
        let typeWrite = (item, i, callback) => {
            // check if modal is show
            if (this.props.show) {
                // check if text isn't finished yet
                if (i < item.bin.length) {
                    // add next character to input
                    this.textInput.value = item.bin.substring(0, i + 1);
                    // return card style to default state
                    if (i == 0) {
                        this.card.className = "block-cards__card-one__card";
                    }
                    // add bank style to card
                    if (i == 4) {
                        this.bankIcon.style.backgroundImage = this.props.style == "stroke" ?
                        "url(img_opt/frame-customization/" + item.bankIcon + "-bl.svg)" :
                        "url(img_opt/frame-customization/" + item.bankIcon + "-wh.svg)";

                        this.systemIcon.style.backgroundImage = this.props.style == "stroke" ?
                            "url(img_opt/frame-customization/" + item.systemIcon + "-bl.svg)" :
                            "url(img_opt/frame-customization/" + item.systemIcon + "-wh.svg)";

                        // check bankSettingsType options (color||stroke)
                        this.props.style == "color" ? this.card.style.backgroundColor = item.bg : this.card.style.borderColor = item.bg;
                        this.card.className += " identified";
                    }
                    // wait for a while and call this function again for next character
                    setTimeout(()=> {
                        typeWrite(item, ++i, callback)
                    }, 100);
                    // text finished, call callback if there is a callback function
                } else if (typeof callback == "function") {
                    setTimeout(callback, 1250);
                }
            }
        };

        // start a typewriter animation for a text in the bankCollection array
        let startWrite = (i) => {
            // check if bankCollection[i] not exists
            if (typeof BANK_COLLECTION[i] == "undefined") {
                // start a typewriter animation from the start
                setTimeout(()=> {
                    startWrite(0)
                }, 200000)
            } else {
                // start a typewriter animation from the next item
                typeWrite(BANK_COLLECTION[i], 0, ()=> {
                    startWrite(++i)
                })
            }
        };

        //  start a typewriter animation if modal is open
        if (this.props.show) {
            startWrite(0);
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props.show !== nextProps.show
    };

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={350}
                transitionLeaveTimeout={350}>
                {this.props.show && <div className="modal">
                    <div className="modal__dialog">
                        <div className="modal__content">
                            <div className="block-cards colors-preview">
                                <div className={this.props.style == "color" ? "block-cards__card-one" : "block-cards__card-one stroke-style"}>
                                    <div ref={(card) => {this.card = card}} className="block-cards__card-one__card">
                                        <div className="wrap-mps">
                                            <div className="bank-logo">
                                                <i ref={(icon) => {this.bankIcon = icon}}
                                                   className="bank-icon animated">&nbsp;</i>
                                            </div>
                                            <div className="block-cards__card-one__card__mps">
                                                <i ref={(icon) => {this.systemIcon = icon}}
                                                   className="mps-icon animated">&nbsp;</i>
                                            </div>
                                        </div>
                                        <div className="block-cards__card-one__card__card-number">
                                            <label htmlFor="card_num">Номер карты:</label>
                                            <div
                                                className="block-cards__card-one__card__card-number__wrap-input border-bottom">
                                                <input ref={(input) => {this.textInput = input}} type="text"
                                                       value="0000 0000 0000 0000" id="card_num" readOnly="readonly"/>
                                            </div>
                                        </div>
                                        <div className="block-cards__card-one__card__expire-date">
                                            <label htmlFor="expire_date">Срок действия:</label>
                                            <div
                                                className="block-cards__card-one__card__expire-date__wrap-input border-bottom">
                                                <input type="text" value="04/18" id="expire_date" readOnly="readonly"/>
                                            </div>
                                        </div>
                                        <div className="block-cards__card-one__card__cvc">
                                            <label htmlFor="cvc">cvc/cvv2:</label>
                                            <div className="block-cards__card-one__card__cvc__wrap-input border-bottom">
                                                <input type="text" value="•••" id="cvc" readOnly="readonly"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a onClick={this.handleModalCard} className="modal__controls" href="#">вернуться к
                                настройкам</a>
                        </div>
                    </div>
                </div>}
            </ReactCSSTransitionGroup>
        )
    };
}