import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const Header = dynamic(() => import('./Header'));
const List = dynamic(() => import('./List'));
const Info = dynamic(() => import('./Info'));
const Slider = dynamic(() => import('./Slider'));
const Price = dynamic(() => import('./Price'));
const Footer = dynamic(() => import('./Footer'));

export const finalComponents: { [key: string]: ComponentType<unknown> } = {
  HeaderComponent: Header,
  ListComponent: List,
  InfoComponent: Info,
  SliderComponent: Slider,
  PriceComponent: Price,
  FooterComponent: Footer,
};
