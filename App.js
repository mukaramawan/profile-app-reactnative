import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  function onContact() {
    console.warn("Contact Me!");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://miro.medium.com/v2/resize:fit:1400/1*dDPs-yaP5TTkJmtY77Uq5w.jpeg",
              }}
              style={styles.bannerImage}
            />
            <Image
              source={require("./assets/mukaram.png")}
              style={styles.profileImage}
            />
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Muhammad Mukaram Awan
            </Text>
            <Text>React Native Developer</Text>

            <View style={{ flexDirection: "row", marginVertical: 10, gap: 5 }}>
              <FontAwesome name="github" size={24} color="black" />
              <FontAwesome name="linkedin-square" size={24} color="black" />
            </View>

            <Button
              title="Contact me"
              onPress={() => {
                Linking.openURL("mailto:mukaramawan2002@gmail.com");
              }}
            />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Professional Full-Stack Software Developer with 1+ year of
              experience building and deploying scalable web applications.
              Proficient in React Native, MERN stack, TypeScript, Tailwind CSS,
              and RESTful APIs, with strong skills in authentication, data
              security, and responsive UI design.
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ padding: 10, gap: 10 }}
            >
              <ProjectCard
                name="Chat Application"
                image={{
                  uri: "https://i.ytimg.com/vi/bR4b_Io8shE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDrX0c0k8C1M5DI5GOXFFomp5m5kw",
                }}
              />
              <ProjectCard
                name="Email Application"
                image={{
                  uri: "https://i.ytimg.com/vi/Qm7-7PnszM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDAiYyXm0KhuZQLr0LzYws-1EUNdA",
                }}
              />
              <ProjectCard
                name="Interview App"
                image={{
                  uri: "https://i.ytimg.com/vi/PJ0ARnSKfgw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6Abd-aqiDCnHpLICXcLyzMbp6VA",
                }}
              />
            </ScrollView>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -75,
  },
  bannerImage: { width: "100%", aspectRatio: 1.8 }
});
