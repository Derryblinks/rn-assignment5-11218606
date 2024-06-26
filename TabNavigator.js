
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingScreen';
import { Image, StyleSheet } from 'react-native';
import { ThemeContext } from './Theme/ThemeContext';
import { useContext } from 'react';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = require('./assets/images/home.png');
            } else if (route.name === 'My Cards') {
              iconName = require('./assets/images/myCards.png');
            } else if (route.name === 'Statistics') {
              iconName = require('./assets/images/statictics.png');
            } else if (route.name === 'Settings') {
              iconName = require('./assets/images/settings.png');
            }
            return <Image source={iconName} style={[styles.icon, { tintColor: isDarkTheme ? '#fff' : '#000' }]} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff', 
          },
          headerShown: false ,
        })
      }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={HomeScreen} />
        <Tab.Screen name="Statistics" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default TabNavigator;
