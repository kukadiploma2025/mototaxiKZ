document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.order-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let address = document.getElementById('address').value;
        let destination = document.getElementById('destination').value;
        let phone = document.getElementById('phone').value;
        let tariff = document.getElementById('tariff').value;
        let totalPrice = document.getElementById('totalPrice').innerText;

        if (!address || !destination || !phone || !tariff) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        let message = `📌 Новый заказ!
🚀 Откуда: ${address}
📍 Куда: ${destination}
📞 Телефон: ${phone}
💰 Тариф: ${tariff} тг
🛵 Итоговая цена: ${totalPrice} тг`;

        let chatId = '-4650823791';
        let botToken = '8052888670:AAHtnXNS1d75c89BOI3H7CzLO0OPSoX8VK4';
        let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url).then(response => {
            if (response.ok) {
                alert('Заказ отправлен!');
            } else {
                alert('Ошибка отправки!');
            }
        });
    });

    document.getElementById('tariff').addEventListener('change', function() {
        document.getElementById('totalPrice').innerText = this.value;
    });
});
