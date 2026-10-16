import { useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductForm from "./Components/ProductForm";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    stock: 25,
    description: "Premium wireless headphones with clear sound.",
    icon: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    category: "Electronics",
    stock: 18,
    description: "Smart watch with fitness tracking features.",
    icon: "⌚",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 1299,
    category: "Accessories",
    stock: 40,
    description: "Durable backpack with a laptop compartment.",
    icon: "🎒",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 2199,
    category: "Fashion",
    stock: 12,
    description: "Comfortable shoes for everyday activities.",
    icon: "👟",
  },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedId, setSelectedId] = useState(1);
  const [editedProduct, setEditedProduct] = useState({
    ...initialProducts[0],
  });
  const [message, setMessage] = useState("");

  const selectProduct = (id) => {
    const selected = products.find((p) => p.id === id);

    setSelectedId(id);
    setEditedProduct({ ...selected });
    setMessage("");
  };

  const handleChange = (field, value) => {
    if (field === "reset") {
      selectProduct(selectedId);
      return;
    }

    setEditedProduct((prev) => ({
      ...prev,
      [field]: value,
    }));

    setMessage("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updated = {
      ...editedProduct,
      price: Number(editedProduct.price),
      stock: Number(editedProduct.stock),
    };

    setProducts((prev) =>
      prev.map((product) =>
        product.id === selectedId ? updated : product
      )
    );

    setEditedProduct(updated);
    setMessage("Product updated successfully!");
  };

  const totalStock = products.reduce(
    (sum, product) => sum + Number(product.stock),
    0
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-gray-900">
            Manage Products
          </h1>
          <p className="text-gray-500 mt-2">
            View, edit, and update your inventory in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-3xl font-bold text-indigo-700 mt-2">
              {products.length}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Total Stock</p>
            <h2 className="text-3xl font-bold text-emerald-600 mt-2">
              {totalStock}
            </h2>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Selected Product</p>
            <h2 className="text-xl font-bold text-gray-800 mt-2 truncate">
              {editedProduct.name}
            </h2>
          </div>
        </div>

        {message && (
          <div
            role="status"
            className="mb-6 p-4 rounded-xl bg-green-100 border border-green-200 text-green-800 font-medium"
          >
            ✓ {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <ProductList
              products={products}
              selectedId={selectedId}
              onSelect={selectProduct}
            />
          </div>

          <div className="lg:col-span-3">
            <ProductForm
              product={editedProduct}
              onChange={handleChange}
              onUpdate={handleUpdate}
            />
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm py-8">
          ProductHub © 2026 | React Product Management System
        </footer>
      </main>
    </div>
  );
}