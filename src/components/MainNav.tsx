import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../components/CardContext';

const MainNav: React.FC = () => {
  const { getTotalQuantity } = useCart();

  return (
    <Link to="/order-page" className="relative text-3xl tracking-tight text-red-500">
      <FontAwesomeIcon icon={faShoppingBasket} />
      {getTotalQuantity() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {getTotalQuantity()}
        </span>
      )}
    </Link>
  );
};

export default MainNav;
