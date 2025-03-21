import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "react-native";

const TabsLayout = () => {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingTop: 15,
            height: 88,
            backgroundColor: "#06f",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: "Segoe UI",
            fontWeight: "bold",
            paddingTop: 5,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: true,
            title: "Home",
            headerStyle: {
              backgroundColor: "#06f",
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
            tabBarIcon: ({ color }) => (
              <Image
                source={require("../../assets/images/home.png")}
                style={{ width: 48, height: 47, tintColor: color }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="reminders"
          options={{
            headerShown: true,
            title: "Reminders",
            headerStyle: {
              backgroundColor: "#06f",
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
            tabBarIcon: ({}) => (
              <Image
                source={require("../../assets/images/reminder.png")}
                style={{ width: 52, height: 50 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="todo"
          options={{
            headerShown: true,
            title: "To-Dos",
            headerStyle: {
              backgroundColor: "#06f",
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", alignSelf: "center" },
            tabBarIcon: ({}) => (
              <Image
                source={require("../../assets/images/todo.png")}
                style={{ width: 48, height: 47 }}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsLayout;
