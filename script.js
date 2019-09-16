
let money = prompt('Ваш бюджет за месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget : money,
    timeData : time,
    expense: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');
    
appData.expense.a1 = a2;
appData.expense.a3 = a4;

alert(appData.budget / 30);

