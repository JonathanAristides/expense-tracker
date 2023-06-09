import ExpenseList from "./components/ExpenseList.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ExpenseFilter } from "./components/ExpenseFilter.tsx";
import { ExpenseForm } from "./components/ExpenseForm.tsx";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Buy papertowels",
      amount: 1.99,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Buy milk",
      amount: 1.49,
      category: "Food",
    },
    {
      id: 3,
      description: "Buy a movie",
      amount: 14.5,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Buy bread",
      amount: 0.99,
      category: "Food",
    },
    {
      id: 5,
      description: "Buy a book",
      amount: 9.99,
      category: "Books",
    },
  ]);

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) {
    return <p>No expenses</p>;
  }

  return (
    <div>
      <div>
        <ExpenseForm
          onSubmit={(expense) => {
            console.log(expense)
            setExpenses([...expenses, {...expense, id: expenses.length + 1}]);
          }}
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) => {
          setExpenses(filteredExpenses.filter((expense) => expense.id !== id));
        }}
      />
    </div>
  );
}

export default App;
