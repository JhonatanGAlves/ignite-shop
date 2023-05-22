import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/src/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>T-Shirt X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et
          maxime molestias reprehenderit atque aliquid minima distinctio
          blanditiis necessitatibus libero, at temporibus! Repellat inventore
          vitae beatae consequatur, dolores dignissimos id?
        </p>

        <button>Buy now</button>
      </ProductDetails>
    </ProductContainer>
  );
}
