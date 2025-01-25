import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import Header from '../components/Header';

export default function Products() {
  const allProducts = Object.values(productsData).flat();

  return (<>
  <Header />
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-primary font-bold">₹{product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</p>
              <p className="text-sm text-green-500">{product.discount}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

