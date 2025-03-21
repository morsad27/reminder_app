import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TabsLayout = ({ color, focused }) => {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#ff8c00",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            height: 80,
            backgroundColor: "#161622",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
      >
        <Tabs.Screen
          name="reminders"
          options={{
            headerShown: true,
            title: "Reminders",
            headerStyle: { backgroundColor: "#161622" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="reminder" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            headerShown: true,
            title: "To Do",
            headerStyle: { backgroundColor: "#161622" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list-ul" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsLayout;
