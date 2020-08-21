import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SomeScreen from "./src/screens/SomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ImgListScreen from "./src/screens/ImgListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: SomeScreen,
    List: ListScreen,
    Legends: ImgListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      // title: "App",
    },
  }
);

export default createAppContainer(navigator);
