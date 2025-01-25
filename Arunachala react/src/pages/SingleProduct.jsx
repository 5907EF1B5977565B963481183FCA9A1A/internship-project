

import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

export default function SingleProduct() {
  const { id } = useParams();
  const allProducts = Object.values(productsData).flat();
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return <div className="container mx-auto my-8 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <Link to="/products" className="text-primary hover:underline mb-4 inline-block">&larr; Back to All Products</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-primary font-bold mb-2">₹{product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-500 line-through mb-2">₹{product.originalPrice.toFixed(2)}</p>
          <p className="text-lg text-green-500 mb-4">{product.discount}</p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Add to Cart
          </button>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

