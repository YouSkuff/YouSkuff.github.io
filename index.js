let Opin = [1, 2];

const botToken = ['7771662300:AAEwPW7MVRDAois9iuVC_78jgEHVAvvZHo8', '7623269736:AAH3KjEtiNRTKqlQQzkEIvyd3uKt9wwGIP4'];
const chatId = '7339807316';
const url = [`https://api.telegram.org/bot${botToken[0]}/sendMessage`, `https://api.telegram.org/bot${botToken[1]}/sendMessage`];

const Wather = "Начало сеанса";

function Opinion() {
    Opin[0] = confirm('Хотите ли вы пройти анонимное голосование?');

    if (Opin[0] === true) {
        Opin[1] = confirm('Как вы считаете, YouSkuff прикольная площадка?');

        if (Opin[1] === true) {
            Opin[1] = "Да\n";
        }
        else {
            Opin[1] = "Нет\n";
        }

        Opin[1] += prompt('Спасибо!\nОбоснуйте пожалуйста ваше мнение.');

        Data(1, Opin[1]);
    }
}

function Data(type, string) {
    fetch(url[type], {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            chat_id:chatId,
            text:string
        })
    })
}

window.onload = function() {
    Data(0, Wather);
    setTimeout(Opinion, 1500);
}