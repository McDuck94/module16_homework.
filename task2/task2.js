//Создаем объект JS с необходимыми данными
const student = {
    name: 'Anton',
    age: 36,
    skils: ["Javascript","HTML","CSS"],
    salary: 80000,
};

//Переводим объект JS с помощью JSON.stringify в JSON
const json = JSON.stringify(student);

//Выводим данные в консоль
console.log(json);