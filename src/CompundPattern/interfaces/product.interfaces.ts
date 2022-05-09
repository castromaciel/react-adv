import { ReactElement } from "react";

export interface ProductCardProps{
  children?: ReactElement | ReactElement[ ]
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProdcutContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) :JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ title, img }: { title?: string; img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}