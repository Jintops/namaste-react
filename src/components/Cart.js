import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Example: calculate total price if each item has a "price" field
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        {/* Clear Cart Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </h2>
          {cartItems.length > 0 && (
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-lg text-gray-600 mb-2">Your cart is empty 😔</h2>
            <p className="text-gray-500">Add some delicious food to get started!</p>
          </div>
        ) : (
          <>
            <ItemList items={cartItems} />

            {/* Cart Summary */}
            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-700">
                Total: ₹{totalPrice}
              </h2>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
                Proceed to Checkout ✅
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
