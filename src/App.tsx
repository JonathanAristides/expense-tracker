import ExpenseList from "./components/ExpenseList.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ExpenseFilter } from "./components/ExpenseFilter.tsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Buy papertowels",
      amound: 1.99,
      category: "Books",
    },
    {
      id: 2,
      description: "Buy milk",
      amound: 1.49,
      category: "Food",
    },
    {
      id: 3,
      description: "Buy a movie",
      amound: 14.50,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Buy bread",
      amound: 0.99,
      category: "Food",
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
