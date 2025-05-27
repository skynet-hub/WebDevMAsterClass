document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.querySelector("#expense-form");
    const ExpenseNameInput = document.querySelector("#expense-name");
    const ExpenseAmountInput = document.querySelector("#expense-amount")
    const expenseList = document.querySelector("#expense-list");
    const totalAmountDisplay = document.querySelector("#total-amount") 


    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalAmount = calculateTotal();

    renderExpenses()
    updateTotal()

    //Let us do event listerner for adding expenses
    //This will be done when a form is submitted
    //Thus trigger the event  then

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault(); //To stop methods actions and stuff
        //Get the name and the value of the product from fields
        const name = ExpenseNameInput.value.trim();
        const amount = parseFloat(ExpenseAmountInput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0){
            const newExpense = {
                id: Date.now(),
                name,
                amount
            };
            
            expenses.push(newExpense)
            storeToLocal();
            renderExpenses();
            updateTotal();

            ExpenseAmountInput.value = "";
            ExpenseNameInput.value = "";
        }
    })

    function calculateTotal(){
        return expenses.reduce((total, expense) => total + expense.amount, 0)
    }

    function updateTotal(){
        totalAmount = calculateTotal();
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    //Let us do a store to local storage using localstorage API
    function storeToLocal(){
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function renderExpenses(){
        expenseList.innerHTML = ""
        expenses.forEach((expense) => {
            const li = document.createElement("li");
            li.innerHTML = `
            ${expense.name} - ${expense.amount}
            <button data-id=${expense.id}>Delete</button>
            `
            expenseList.appendChild(li)
        });        
    }

    expenseList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            const expenseId = parseInt(e.target.getAttribute("data-id"));
            expenses = expenses.filter(expense => expense.id !== expenseId);

            storeToLocal();
            renderExpenses();
            updateTotal();
        }
    })

})