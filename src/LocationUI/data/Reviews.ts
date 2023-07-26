import {ImageSourcePropType} from 'react-native';
export interface ReviewProps {
  date: string;
  username: string;
  urlImage: any;
  description: string;
}
export const REVIEWS = [
  {
    date: 'FEB 14th',
    username: 'Michael Scoffield',
    urlImage: require('../assets/user1.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    date: 'JAN 24th',
    username: 'Daniel Kraig',
    urlImage: require('../assets/user2.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
];
