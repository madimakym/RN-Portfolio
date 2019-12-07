import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import HomeScreen from './home/index'
import CompetencesScreen from './competences/index'
import PortfolioScreen from './portfolio/index'
import detailLpScreen from './portfolio/lp/detail'
import detailSiteWebScreen from './portfolio/siteWeb/detail'
import dashboardScreen from './portfolio/dashboard/detail'
import mobileScreen from './portfolio/mobile/detail'

const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
  });

const CompetencesStack = createStackNavigator({
  Competences: { screen: CompetencesScreen, navigationOptions: {
    title: 'Competences',
    headerTintColor: 'black',
    headerTitleStyle: { 
        fontSize: 18,
    },
    headerStyle: {
        backgroundColor: '#eff0f2',
    }
  } },
  });

  const portfolioStack = createStackNavigator({
    Portfolio: { screen: PortfolioScreen, navigationOptions: {
      title: 'Portfolio',
      headerTintColor: 'black',
      headerTitleStyle: { 
          fontSize: 18,
      },
        headerStyle: {
            backgroundColor: '#eff0f2',
        }
      } },
    Detail:{screen: detailLpScreen, navigationOptions: {
      headerTintColor: 'black',
        headerStyle: {
            backgroundColor: '#eff0f2',
        }
      }},

    detailSiteWeb:{screen: detailSiteWebScreen, navigationOptions: {
        headerTintColor: 'black',
          headerStyle: {
              backgroundColor: '#eff0f2',
          }
    }},

    detailDashboard:{screen: dashboardScreen, navigationOptions: {
      headerTintColor: 'black',
        headerStyle: {
            backgroundColor: '#eff0f2',
        }
      }},

      Mobile:{screen: mobileScreen, navigationOptions: {
        headerTintColor: 'black',
          headerStyle: {
            backgroundColor: '#eff0f2',
        }
      }},


    });
  

  

  const DashboardTabNavigator = createBottomTabNavigator(
    {
      Home: { screen: HomeStack , 
            navigationOptions: {
            tabBarLabel:"General",
            tabBarIcon: ({ tintColor }) => ( <FontAwesome name="user" size={22} color={tintColor} />)
          },
        },
      
      Competences: { screen: CompetencesStack, 
            navigationOptions: {
            tabBarLabel:"Compétences",
            tabBarIcon: ({ tintColor }) => ( <EvilIcons name="gear" size={22} color={tintColor} />)
          },
        },

      Search: { screen: portfolioStack , 
          navigationOptions: {
          tabBarLabel:"Portfolio",
          tabBarIcon: ({ tintColor }) => ( <FontAwesome name="briefcase" size={22} color={tintColor} />)
        },
      },

      // experience: { screen: HomeStack, 
      //   navigationOptions: {
      //   tabBarLabel:"Experience",
      //   },
      // },
  },
  {
      tabBarOptions: {
        activeTintColor: '#3c97e1',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'white' // TabBar background
      }
    },
  }
)

const AppContainer = createAppContainer(DashboardTabNavigator);

export default AppContainer;
