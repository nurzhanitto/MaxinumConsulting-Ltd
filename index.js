function saveExpense(event) {
    event.preventDefault();

    const expense = {
        date: document.getElementById('date').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
        comment: document.getElementById('comment').value,
    };

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    alert('Расход сохранен!');
    document.getElementById('expenseForm').reset();

    displayExpenses();
}

function displayExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expensesList = document.getElementById('expensesList');

    expensesList.innerHTML = expenses.map((expense, index) => `
      <li class="list-group-item">
        <strong>Дата:</strong> ${expense.date} | 
        <strong>Сумма:</strong> ${expense.amount} | 
        <strong>Категория:</strong> ${expense.category} | 
        <strong>Комментарий:</strong> ${expense.comment}
      </li>
    `).join('');
}

window.onload = function () {
    document.getElementById('expenseForm').addEventListener('submit', saveExpense);
    displayExpenses();
};
