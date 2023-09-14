function CartCounter({ count, onIncrement }) {
  const increment = () => {
    onIncrement(count + 1); 
  };

  const decrement = () => {
    if (count > 0) {
      onIncrement(count - 1); 
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-l"
        onClick={decrement}
      >-</button>
      <span className="bg-gray-200 px-4 py-2">{count}</span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r"
        onClick={increment}
      >+</button>
    </div>
  );
}

export default CartCounter;
