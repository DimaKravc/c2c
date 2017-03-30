<?php
$json       = file_get_contents( 'php://input' );
$dataObject = json_decode( $json );
$myFile     = "template.html";
$fh         = fopen( $myFile, 'w' );

$stringData = '
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/all.css">
</head>
<body>
<div class="style-cover-app">
	<div class="c2c">
		<div class="c2c__inner-overlay">
	        <div class="block-phone">
	            <div class="block-phone-wrap">
	                <label for="phone">Ваш номер телефона:</label>
	                <div class="wrap-phone-input">
	                    <input type="phone" id="phone" value="+7 (232) 234-45-56">
	                    <span class="error-wrap-icon"><i class="error-wrap-icon__icon">&nbsp;</i></span>
	                </div>
	            </div>
	        </div>
	        <div class="main-block-transfer">
	            <div class="block-cards">
	                <div class="block-cards__card-one animated fadeInLeft">
	                    <div class="block-cards__card-one__arrow"></div>
	                    <div class="block-cards__card-one__wrap">
	                        <div class="block-cards__card-one__wrap__change-card">
	                            <span class="icon-io icon-my-cards">&nbsp;</span>Мои карты
	                        </div>
	                        <div class="block-cards__card-one__wrap__new-card active">
	                            <span class="icon-io icon-new-card">&nbsp;</span>Новая карта
	                        </div>
	                    </div>
	                    <div class="block-cards__card-one__card card-sender-style">
	                        <div class="wrap-mps">
	                            <div class="bank-logo">
	                                <i class="bank-icon animated">&nbsp;</i>
	                            </div>
	                            <div class="block-cards__card-one__card__mps">
	                                <i class="mps-icon animated">&nbsp;</i>
	                            </div>
	                        </div>
	                        <div class="block-cards__card-one__card__card-number">
	                            <label for="card_num">Номер карты:</label>
	                            <div class="block-cards__card-one__card__card-number__wrap-input border-bottom">
	                                <input type="text" title="" placeholder="0000 0000 0000 0000" id="card_num" value="">
	                                <span class="error-wrap-icon"><i class="error-wrap-icon__icon">&nbsp;</i></span>
	                            </div>
	                        </div>
	                        <div class="block-cards__card-one__card__expire-date"><label for="expire_date">Срок действия:</label>
	                            <div class="block-cards__card-one__card__expire-date__wrap-input border-bottom">
	                                <input value="" title="" placeholder="04/18" id="expire_date">
	                                <span class="error-wrap-icon"><i class="error-wrap-icon__icon">&nbsp;</i>&gt;</span>
	                            </div>
	                        </div>
	                        <div class="block-cards__card-one__card__cvc"><label for="cvc">cvc/cvv2:<span class="cvc-icon"><i class="cvc-icon__help">3 последние цифры на оборотной стороне карты</i></span></label>
	                            <div class="block-cards__card-one__card__cvc__wrap-input border-bottom">
	                                <input type="text" title="" placeholder="•••" id="cvc" value="">
	                                <span class="error-wrap-icon"><i class="error-wrap-icon__icon"></i>&gt;</span>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="block-cards__card-one__card-checked">
	                        <div class="wrap-mps">
	                            <div class="bank-logo"><i class="bank-icon animated"></i></div>
	                            <div class="block-cards__card-one__card__mps"><i class="mps-icon animated"></i></div>
	                        </div>
	                        <div class="block-cards__card-one__card-checked__num-wrap">
	                            <span class="block-cards__card-one__card-checked__num-wrap__num">9878 65** **** 8221</span>
	                        </div>
	                    </div>
	                </div>
	                <div class="block-cards__card-two">
	                    <div class="animated fadeInRight">
	                        <div class="block-cards__card-two__card card-recipient-style">
	                            <div class="wrap-mps">
	                                <div class="bank-logo"><i class="bank-icon animated"></i></div>
	                                <div class="block-cards__card-two__card__mps"><i class="mps-icon animated"></i></div>
	                            </div>
	                            <div class="block-cards__card-two__card__card-number">
	                                <label for="card_num_two">Номер карты:</label>
	                                <div class="block-cards__card-two__card__card-number__wrap-input border-bottom">
	                                    <input type="text" title="" placeholder="0000 0000 0000 0000" id="card_num_two" value="">
	                                    <span class="error-wrap-icon"><i class="error-wrap-icon__icon"></i>&gt;</span>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="block-sum">
	                <div class="block-sum__sum-total">
	                    <label for="sum_total">Сумма перевода:</label>
	                    <input type="text" title="" placeholder="1000.00" id="sum_total" value="">
	                    <span class="block-sum__sum-total__text-info">Минимальная сумма: 100 <span class="ruble">q</span></span>
	                </div>
	                <div class="block-sum__sum-commission">
	                    <span class="block-sum__sum-commission__name">Сумма с комиссией:</span>
	                    <div class="block-sum__sum-commission_sum_com">1000.00 <span class="ruble">q</span></div>
	                    <div class="block-sum__sum-commission__commission-block">
	                        <div class="block-sum__sum-commission__commission-block__text">Комиссия:</div>
	                        <div class="block-sum__sum-commission__commission-block__commission">156.23<span class="ruble">q</span></div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="block-main-wrap-content">
	            <div class="block-loading">
	                <div class="block-loading__wrap">
	                    <div class="block-loading__wrap__icon"></div>
	                    <div class="block-loading__wrap__label">Производится оплата...</div>
	                </div>
	            </div>
	            <div class="block-error">
	                <div class="block-error__icon-error"></div>
	                <div class="block-error__wrap-text-error">
	                    <div class="block-error__wrap-text-error__title">Платеж не совершен:</div>
	                    <div class="block-error__wrap-text-error__cause">Нет ответа от банка</div>
	                </div>
	                <div class="block-error__wrap-btn-repeat"><input type="submit" title="" value="Повторить"></div>
	                <div class="block-error__edit-pay">
	                    <div class="block-error__edit-pay__btn">Редактировать платеж</div>
	                </div>
	            </div>
	            <div class="block-sucsses">
	                <div class="block-sucsses__wrap__left">
	                    <div class="block-sucsses__wrap__left__wrap-icon">
	                        <div class="block-sucsses__wrap__left__wrap-icon__icon"></div>
	                    </div>
	                    <div class="block-sucsses__wrap__left__label">Платеж <span class="block-sucsses__wrap__left__label__num">2346669960</span>прошел успешно!</div>
	                </div>
	                <div class="block-sucsses__wrap__right">
	                    <div class="block-sucsses__wrap__right__data">
	                        <div class="block-sucsses__wrap__right__data__row">
	                            <div class="block-sucsses__wrap__right__data__cell color-gray">Номер телефона:</div>
	                            <div class="block-sucsses__wrap__right__data__cell">+7 (234) 555-46-56</div>
	                        </div>
	                        <div class="block-sucsses__wrap__right__data__row">
	                            <div class="block-sucsses__wrap__right__data__cell color-gray">Сумма платежа:</div>
	                            <div class="block-sucsses__wrap__right__data__cell">15 300 Р</div>
	                        </div>
	                        <div class="block-sucsses__wrap__right__data__row">
	                            <div class="block-sucsses__wrap__right__data__cell color-gray">Карта отправителя:</div>
	                            <div class="block-sucsses__wrap__right__data__cell">9999 99** **** 9999</div>
	                        </div>
	                        <div class="block-sucsses__wrap__right__data__row">
	                            <div class="block-sucsses__wrap__right__data__cell color-gray">Карта получателя:</div>
	                            <div class="block-sucsses__wrap__right__data__cell">9999 99** **** 9999</div>
	                        </div>
	                        <div class="block-sucsses__wrap__right__data__row">
	                            <div class="block-sucsses__wrap__right__data__cell color-gray">Дата и время платежа:</div>
	                            <div class="block-sucsses__wrap__right__data__cell">20.03.2016 23:56</div>
	                        </div>
	                    </div>
	                    <div class="block-sucsses__wrap__right__wrap-send-email">
	                        <div class="block-sucsses__wrap__right__wrap-send-email__label"><span class="block-sucsses__wrap__right__wrap-send-email__label__icon"></span>Отправитьквитанцию на email
	                        </div>
	                        <div class="block-sucsses__wrap__right__wrap-send-email__form-email">
	                            <div class="block-sucsses__wrap__right__wrap-send-email__form-email__close"></div>
	                            <div class="block-sucsses__wrap__right__wrap-send-email__form-email__textarea">
	                                <div class="block-sucsses__wrap__right__wrap-send-email__form-email__textarea__input-text">
	                                    <input type="text" title="" placeholder="Введите ваш email" value="">
	                                </div>
	                                <div class="block-sucsses__wrap__right__wrap-send-email__form-email__textarea__input-sub">
	                                    <input type="submit" title=""  value="Отправить">
	                                </div>
	                            </div>
	                            <div class="block-sucsses__wrap__right__wrap-send-email__form-email__text-info">
	                                <div class="block-sucsses__wrap__right__wrap-send-email__form-email__text-info__text">Мы отправили письмо с деталями платежа на email, который вы указали.
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="block-btn-pay"><input type="submit" value="Перевести" title="">
	            <div class="block-btn-pay__text-info">Нажимая на кнопку «Перевести»,<br> вы соглашаетесь c условиями публичной <a href="#">оферты.</a></div>
	        </div>
	        <footer>
	            <div class="footer-info">
	                <div class="left-column">
	                    <div class="logo"></div>
	                    <div class="feedback">Обратная связь</div>
	                </div>
	                <div class="right-column">
	                    <div class="pci"></div>
	                </div>
	            </div>
	        </footer>
	    </div>
	</div>
</div>
</body>
</html>
';

fwrite( $fh, $stringData );
unlink('template.html');
?>