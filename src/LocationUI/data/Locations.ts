import {ImageSourcePropType} from 'react-native';
import {REVIEWS} from '../data/Reviews';
import {ReviewProps} from '../data/Reviews';
export interface LocationProps {
  name: string;
  urlImage: ImageSourcePropType;
  addressLine1: string;
  addressLine2: string;
  starRating: number;
  latitude: string;
  longitude: string;
  reviews: ReviewProps[];
}
export const LOCATIONS = [
  {
    name: 'ATCOASTAL',
    urlImage: require('../assets/sea.jpg'),
    addressLine1: 'La Cresenta-Montrose, CA91020 Glendale',
    addressLine2: 'NO. 791187',
    starRating: 4,
    latitude: 'NORTH LAT 24',
    longitude: 'EAST LNG 17',
    reviews: REVIEWS,
  },
  {
    name: 'SYRACUSE',
    urlImage: require('../assets/mountain.jpg'),
    addressLine1: 'La Cresenta-Montrose, CA91020 Glendale',
    addressLine2: 'NO. 11641',
    starRating: 4,
    latitude: 'SOUTH LAT 14',
    longitude: 'EAST LNG 27',
    reviews: REVIEWS,
  },
  {
    name: 'OCEANIC',
    urlImage: require('../assets/sea2.jpg'),
    addressLine1: 'La Cresenta-Montrose, CA91020 Glendale',
    addressLine2: 'NO. 791187',
    starRating: 4,
    latitude: 'NORTH LAT 24',
    longitude: 'WEST LNG 08',
    reviews: REVIEWS,
  },
  {
    name: 'MOUNTAINOUS',
    urlImage: require('../assets/mountain2.jpg'),
    addressLine1: 'La Cresenta-Montrose, CA91020 Glendale',
    addressLine2: 'NO. 791187',
    starRating: 4,
    latitude: 'SOUTH LAT 39',
    longitude: 'WEST LNG 41',
    reviews: REVIEWS,
  },
];
