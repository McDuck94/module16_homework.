// проверяем был ли пользлватель ранее на сайте
const myKey = localStorage.getItem('tstKey');

// Если при ответе получили пустое знчение выводим promt `Добро пожаловать! Назовите, пожалуйста, ваше имя`
if (myKey = null) {
	const userName = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
	const date = new Date();

// Записываем данные в JSON для удобного хранения
	const jsonString = `
  {
    "name": ${userName},
    "date": ${date}
  }`;

//Запись в localStorage данные о пользователе и времени входа
	localStorage.setItem('tstKey', jsonString);
} else {
	alert(`Добрый день, ${myKey.name}! Давно не виделись. В последний раз вы были у нас ${myKey.date}`);

// перезаписываем JSON c обновленной датой
	const jsonString = `
  {
    "name": ${myKey.name},
    "date": ${new Date()}
  }`;

//Перезаписывам localStorage о времени последнего входа
	localStorage.setItem('tstKey', jsonString);
};