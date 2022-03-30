import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductItem from '@components/ProductItem.jsx';
import '@styles/ProductList.scss';

const API = 'http://api.escuelajs.co/api/v1/products';
const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;