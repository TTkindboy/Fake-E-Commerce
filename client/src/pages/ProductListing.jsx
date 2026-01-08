import { useState, useEffect } from 'react';
import ListingItem from '../components/ListingItem';
import productData from '../data/products.json';

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setProducts(productData);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  return (
    <div className="mt-20 p-4 flex flex-wrap justify-center gap-4">
      {error && <p className='text-red-500 font-medium sm:font-semibold mt-5'>Error: {error}</p>}
      {!loading && products.length === 0 && (
        <p className='text-xl text-slate-300'>No Products Available!</p>
      )}
      {loading && (
        <p className='text-4xl text-center w-full'>
          Loading...
        </p>
      )}
      {!loading && products && products.map((product) => (
        <ListingItem key={product.id} product={product} />
      ))}
    </div>
  );
}
