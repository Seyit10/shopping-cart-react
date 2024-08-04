import React from 'react';
import { useCart } from '../components/CardContext';


interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Et Döner', price: 150 },
  { id: 2, name: 'Pizza', price: 210 },
  { id: 3, name: 'Hamburger', price: 250 },
];

const HomePage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex justify-around p-8">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Ürünler</h2>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-700">Fiyat: {product.price} TL</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
