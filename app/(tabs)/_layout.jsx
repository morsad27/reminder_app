import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";

const TabsLayout = () => {
  return (
    <>
        <Tabs>
        <Tabs.Screen
          name="reminders"
          options={{
            headerShown: false,
            title: "Reminders",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="briefcase"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            headerShown: false,
            title: "To Do",
            tabBarIcon: ({ color }) => (
              <Foundation name="mail" size={24} color={color} />
            ),
          }}
        />
        </Tabs>
    </>
  )
}

export default TabsLayout