export default function ProductList({
  products,
  selectedId,
  onSelect,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-xl font-bold text-gray-800 mb-1">
        Existing Products
      </h2>
      <p className="text-gray-500 text-sm mb-5">
        Select a product to edit its details.
      </p>

      <div className="space-y-3">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onSelect(product.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition
              ${
                selectedId === product.id
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-100 hover:border-indigo-200 hover:bg-gray-50"
              }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl">
                {product.icon}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {product.category}
                </p>
                <p className="text-indigo-700 font-bold mt-1">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>

              {selectedId === product.id && (
                <span className="text-indigo-600 text-xl">✓</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}