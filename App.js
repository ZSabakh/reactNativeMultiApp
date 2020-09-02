import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SomeScreen from "./src/screens/SomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImgListScreen from "./src/screens/ImgListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorOneScreen from "./src/screens/ColorOneScreen";
import InputScreen from "./src/screens/inputScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: SomeScreen,
    List: ListScreen,
    Legends: ImgListScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorOne: ColorOneScreen,
    Input: InputScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      // title: "App",
    },
  }
);

export default createAppContainer(navigator);
