import { ProductsWrapper, Title } from './Products.styled';

import { ProductCard } from '../ProductCard';
import { shopData } from '../../data';

export const Products = () => {
  return (
    <>
      <Title>Welcome to Forever 22 Clothing Store</Title>
      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};