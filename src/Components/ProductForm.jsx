export default function ProductForm({
  product,
  onChange,
  onUpdate,
}) {
  if (!product) {
    return <p>Select a product to edit.</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-indigo-100 p-3 rounded-xl text-2xl">
          ✏️
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Edit Product
          </h2>
          <p className="text-gray-500 text-sm">
            Update your product information below.
          </p>
        </div>
      </div>

      <form onSubmit={onUpdate} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            required
            value={product.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Price (₹)
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              required
              value={product.price}
              onChange={(e) => onChange("price", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Stock Quantity
            </label>
            <input
              type="number"
              min="0"
              step="1"
              required
              value={product.stock}
              onChange={(e) => onChange("stock", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Category
          </label>
          <select
            value={product.category}
            onChange={(e) => onChange("category", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Fashion</option>
            <option>Home & Living</option>
            <option>Stationery</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Description
          </label>
          <textarea
            rows="4"
            value={product.description}
            onChange={(e) => onChange("description", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
            placeholder="Describe your product..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-xl transition shadow-md"
          >
            ✓ Update Product
          </button>

          <button
            type="button"
            onClick={() => onChange("reset")}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-5 rounded-xl transition"
          >
            Reset Changes
          </button>
        </div>
      </form>
    </div>
  );
}