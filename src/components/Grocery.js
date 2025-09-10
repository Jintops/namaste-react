import React, { useState } from "react";

const Grocery = () => {
  // Example grocery items (can later fetch from API)
  const [groceries] = useState([
    { id: 1, name: "Apples 🍎", price: 120, unit: "kg" },
    { id: 2, name: "Milk 🥛", price: 60, unit: "liter" },
    { id: 3, name: "Bread 🍞", price: 40, unit: "pack" },
    { id: 4, name: "Eggs 🥚", price: 70, unit: "dozen" },
    { id: 5, name: "Rice 🍚", price: 55, unit: "kg" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🛒 Grocery Store
      </h1>

      {/* Grid of grocery items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {groceries.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
            <p className="text-gray-600">₹{item.price} / {item.unit}</p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
