function Instruction() {
  return (
    <div className="flex flex-col items-center my-10 px-5 ">
      <ul className="text-justify text-sm tracking-wider text-gray-600 p-10 rounded-md shadow-md shadow-gray-500">
        <li>
          <h3 className="text-xl font-bold text-green-800 mb-5">
            How to Order?
          </h3>
        </li>
        <li className="my-3">
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className="my-3">Choose the restaurant you want to order from.</li>
        <li className="my-3">Select your items and tap “Add to Cart”.</li>
        <li className="my-3">
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className="my-3">Review your order and tap “Place Order”...</li>
        <li className="my-3">Track your order progress.</li>
      </ul>
    </div>
  );
}

export default Instruction;
