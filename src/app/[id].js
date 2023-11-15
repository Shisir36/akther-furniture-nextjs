// pages/[productId].js
"use client"
import { useRouter } from 'next/router';

const ProductPage = ({params}) => {
 const {id} = params
  console.log(id)

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product ID: {id}</p>
      {/* Render other product details here */}
    </div>
  );
};

export default ProductPage;
