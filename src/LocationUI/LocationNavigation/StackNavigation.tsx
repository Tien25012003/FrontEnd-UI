import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LocationHome from '../Screens/LocationHome';
import Detail from '../Screens/Detail';
import {LocationProps} from '../data/Locations';
export type StackParams = {
  Home: undefined;
  Detail: {location: LocationProps} | undefined;
};
const Stack = createNativeStackNavigator<StackParams>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={LocationHome} />
        <Stack.Screen name="Detail" component={Detail} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
