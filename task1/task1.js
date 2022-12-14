//Создаем JS объект для вывода данных
const result = {
	list: []
};

//Парсим XML
const parser = new DOMParser();

//Записываем XML
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Парсинг XML 
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentsNodes = xmlDOM.querySelectorAll("student");

//Записываем функцию и применяем метод ForEach для перебора
studentsNodes.forEach((element) => {
	var student = new Object();
	const studentFirstName = element.querySelector("first");
	const studentSecondName = element.querySelector("second");
	const studentAge = element.querySelector("age");
	const studentProf = element.querySelector("prof");
	const nameNode = element.querySelector("name");
	const nameLang = nameNode.getAttribute("lang");
	student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
	student.age = studentAge.textContent;
	student.prof = studentProf.textContent;
	student.lang = nameLang;
	result.list.push(student);
});

//Выводим результат в консоль
console.log(result);