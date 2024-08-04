// src/components/OrderPage.tsx
import React from 'react';
import { useCart } from '../components/CardContext';

const OrderPage: React.FC = () => {
  const { cart, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Sepet</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Sepetiniz boş</p>
      ) : (
        <div>
          <ul className="space-y-2 mb-4">
            {cart.map((item) => (
              <li key={item.product.id} className="border p-2 rounded shadow-sm flex justify-between items-center">
                <span>{item.product.name} - {item.quantity} adet</span>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Çıkar
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4">
            <h3 className="text-lg font-bold">Toplam: {calculateTotal()} TL</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
