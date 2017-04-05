import React from 'react';

const STYLESHEET = ({settings}) => {
    let generateRules = () => {
        let styles = {
            frameStyles: {
                width: (() => {
                    return settings.frameWidth > settings.sizes[1] ? settings.sizes[1] + "px" : settings.frameWidth + "px";
                })(),
                background: settings.frameBgColor
            },
            underCardStyles: {
                background: settings.cardUnderBgColor
            },
            controlsStyles: {
                color: settings.controlsColor
            },
            cardSender: {
                color: settings.cardSettingsShow ? settings.cardFieldSenderColor : null,
                style: (()=> {
                    if (settings.cardSettingsShow) {
                        if (settings.cardBg === 'cardImage') {
                            settings.cardSenderImage = settings.cardSenderImage ? settings.cardSenderImage : "";
                            return "border-color: transparent !important; background-color: transparent !important; background-image: url('" + settings.cardSenderImage + "') !important;"
                        } else if (settings.cardBg === 'cardStroke') {
                            return "background: none !important; box-shadow: none !important; border-color:" + (settings.cardSenderStrokeColor ? settings.cardSenderStrokeColor : "#cccccc" ) + " !important;"
                        } else if (settings.cardBg === 'cardColor') {
                            return "background-color:" + settings.cardSenderColor + " !important;" + "border-color:" + settings.cardSenderColor + " !important;";
                        }
                    } else {
                        return '';
                    }
                })(),
                controlsWrap: settings.authByPhone ? "visible" : "hidden"
            },
            cardRecipient: {
                color: settings.cardSettingsShow ? settings.cardFieldRecipientColor : null,
                style: (()=> {
                    if (settings.cardSettingsShow) {
                        if (settings.cardBg === 'cardImage') {
                            settings.cardRecipientImage = settings.cardRecipientImage ? settings.cardRecipientImage : "";
                            return "border-color: transparent !important; background-color: transparent !important; background-image: url('" + settings.cardRecipientImage + "') !important;"
                        } else if (settings.cardBg === 'cardStroke') {
                            return "background: none !important; box-shadow: none !important; border-color:" + (settings.cardRecipientStrokeColor ? settings.cardRecipientStrokeColor : "#cccccc" ) + " !important;"
                        } else if (settings.cardBg === 'cardColor') {
                            return "background-color:" + settings.cardRecipientColor + " !important;" + "border-color:" + settings.cardRecipientColor + " !important;";
                        }
                    } else {
                        return '';
                    }
                })()
            }
        };
        return`
        .c2c__inner-overlay { background-color: ` + styles.frameStyles.background + ` !important; }
        .block-cards { background-color: ` + styles.underCardStyles.background + ` !important; }
        .block-cards__card-one__wrap__new-card,
        .block-btn-pay__text-info a, footer .feedback { color: ` + styles.controlsStyles.color + ` !important; }
        .block-btn-pay input[type="submit"] { background-color: ` + styles.controlsStyles.color + ` !important; }
        .block-cards__card-one input::-webkit-input-placeholder {  color: ` + styles.cardSender.color + ` !important; }
        .block-cards__card-one input::-moz-placeholder { color: ` + styles.cardSender.color + ` !important; }
        .block-cards__card-one label { color: ` + styles.cardSender.color + ` !important; }
        .block-cards__card-one .border-bottom { border-color: ` + styles.cardSender.color + ` !important; }
        .block-cards__card-two input::-webkit-input-placeholder { color: ` + styles.cardRecipient.color + ` !important; }
        .block-cards__card-two input::-moz-placeholder { color: ` + styles.cardRecipient.color + ` !important; }
        .block-cards__card-two label { color: ` + styles.cardRecipient.color + ` !important; }
        .block-cards__card-two .border-bottom { border-color: ` + styles.cardRecipient.color + ` !important; }
        .card-sender-style { ` + styles.cardSender.style + ` }
        .card-recipient-style { ` + styles.cardRecipient.style + ` }
        .block-cards__card-one__wrap { visibility:` + styles.cardSender.controlsWrap + `}
        `
    };
    return (
        <style>
            {generateRules()}
        </style>
    );
};

export default STYLESHEET;