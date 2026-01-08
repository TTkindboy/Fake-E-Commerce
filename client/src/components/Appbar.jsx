import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Appbar() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="fixed top-0 w-full bg-blue-700 text-slate-100 z-50">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">
          <span>La </span>
          <span className='text-yellow-300'>Caribe Radiante</span>
        </Link>
        <ul className="flex gap-5 font-semibold items-center">
          <Link to="/shopping-cart" className="hover:underline">
            <span>My Cart</span>
            {totalItems > 0 && (
              <span className="bg-rose-500 text-white px-2 py-1 rounded-full ml-1">
                {totalItems}
              </span>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
