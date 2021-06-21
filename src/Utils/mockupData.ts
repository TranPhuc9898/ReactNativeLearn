import {IListTabItem} from './Types';
import {IListData} from './Types';

import Image from '../Utils/Themes/Image';

export const LIST_TAB: IListTabItem = [
  'Autumn',
  'Special',
  'Hot deals',
  'Traditional',
  'Other',
];
// type Ihomscreen và interface Ihomscreen

// chỉ xài object với những thực thể

// cách chia type chia ntn ?

export const LIST_DATA: Array<IListData> = [
  {
    title: 'Special Delivery',
    data: [
      {
        id: 1,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
      {
        id: 2,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
      {
        id: 3,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
      {
        id: 4,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
    ],
  },
  {
    title: 'Hot Deal',
    data: [
      {
        id: 1,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
      {
        id: 2,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
      {
        id: 3,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
      {
        id: 4,
        image: Image.veganPizza,
        name: 'Shrimp Pizza',
        kCal: 475,
        description: 'Shrimp, mushroom, cheese, tomato',
        price: 12,
        listingPrice: 20,
      },
    ],
  },
];
