import {ImageSourcePropType} from 'react-native';

export type IListTabItem = Array<string>;

// export interface IListTabItem {
//   title: string;
// }

export type IListData = {
  title: string;
  data: Array<{
    id: number;
    image: ImageSourcePropType;
    name: string;
    kCal: number;
    description: string;
    price: number;
    listingPrice: number;
  }>;
};
