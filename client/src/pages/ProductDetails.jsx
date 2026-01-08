import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/product/productSlice';
import productData from '../data/products.json';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    try {
      const foundProduct = productData.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setLoading(false);
        setError(null);
      } else {
        setError("Product not found");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, [id]);

  if (loading) {
    return <p className='font-medium sm:font-semibold mt-5'>Loading...</p>;
  }

  if (error) {
    return <p className='text-red-500 font-medium sm:font-semibold mt-5'>Error: {error}</p>;
  }

  return (
    <div className='mt-16'>
      <div className='flex flex-col lg:flex-row p-8 md:p-28 gap-10'>
        <div className='flex justify-center items-center'>
          <img 
            src={product.image} 
            alt="product-img" 
            className='h-96 w-96 object-contain rounded-lg shadow-md'
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-medium mb-6"> ${product.price}</p>
          <button 
            onClick={handleAddToCart} 
            className='bg-gray-800 py-4 px-8 text-white text-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:shadow-outline-primary'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}