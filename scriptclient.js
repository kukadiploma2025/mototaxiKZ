document.querySelector('.order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let address = document.querySelector('input[placeholder="Ваш адрес"]').value;
    let destination = document.querySelector('input[placeholder="Куда ехать"]').value;
    
    let botToken = '8052888670:AAHtnXNS1d75c89BOI3H7CzLO0OPSoX8VK4'; // Замени на свой токен
    let chatId = '-4650823791'; // Замени на свой chat_id
    
    let message = `🚀 Новый заказ!\n📍 Откуда: ${address}\n📍 Куда: ${destination}`;
    
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Заказ отправлен! Ожидайте ответа.');
            } else {
                alert('Ошибка отправки заказа.');
            }
        })
        .catch(error => alert('Ошибка соединения.'));
    
    document.querySelector('.order-form').reset();
});
