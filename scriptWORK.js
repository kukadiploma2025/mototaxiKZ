document.getElementById("bike").addEventListener("change", function() {
    let otherBikeField = document.getElementById("otherBikeField");
    if (this.value === "Другое") {
        otherBikeField.style.display = "block";
    } else {
        otherBikeField.style.display = "none";
    }
});

document.getElementById("taxiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let bike = document.getElementById("bike").value;
    let otherBike = document.getElementById("otherBike").value;
    let responsibilityChecked = document.getElementById("responsibility").checked ? "✅ Принял ответственность" : "❌ Не принял ответственность";
    let licenseChecked = document.getElementById("license").checked ? "✅ Имеет права и учет" : "❌ Нет прав/учета";

    if (bike === "Другое") {
        bike = `Другое (вне списка): ${otherBike}`;
    }

    let message = `🚀 *Заявка на работу в мото-такси*\n\n` +
                  `👤 *ФИО:* ${fullname}\n` +
                  `📞 *Телефон:* ${phone}\n` +
                  `🎂 *Возраст:* ${age}\n` +
                  `🏍 *Мотоцикл:* ${bike}\n\n` +
                  `📌 ${responsibilityChecked}\n` +
                  `📌 ${licenseChecked}`;

    let telegramBotToken = "8052888670:AAHtnXNS1d75c89BOI3H7CzLO0OPSoX8VK4"; 
    let chatId = "-4650823791"; 
    let url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    let requestData = {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("✅ Заявка отправлена!");
            document.getElementById("taxiForm").reset();
            document.getElementById("otherBikeField").style.display = "none";
        } else {
            alert("❌ Ошибка отправки. Проверьте данные.");
        }
    })
    .catch(error => {
        console.error("Ошибка:", error);
        alert("❌ Ошибка подключения к Telegram.");
    });
});
