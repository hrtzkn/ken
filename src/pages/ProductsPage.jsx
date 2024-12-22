import { useEffect, useState } from "react";

function ProductsPage() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
    const fetchProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          console.log(json);
          setProducts(json);
        })
        .catch(error => console.error('Error fetching products:', error));
    };

    fetchProducts();
   }, []);
  
  return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Products</h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-40 object-contain mb-4" 
              />
              <h3 className="text-lg font-semibold truncate mb-2 text-gray-700">{product.title}</h3>
              <p className="text-xl font-bold text-red-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div> 
    );
  }
  
  export default ProductsPage;
