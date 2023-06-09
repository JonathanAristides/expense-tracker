interface Props {
  onSelectCategory: (category: string) => void;
}

export function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        onSelectCategory(event.target.value);
      }}
    >
      <option value="">All</option>
      <option value="Food">Groceries</option>
      <option value="Transportation">Utilities</option>
      <option value="Housing">Entertainment</option>
    </select>
  );
}
