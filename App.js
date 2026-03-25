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

export default function App() {
  function onContact() {
    console.warn("Contact Me!");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View  style={styles.container}>
            <Image
              source={{
                uri: "https://miro.medium.com/v2/resize:fit:1400/1*dDPs-yaP5TTkJmtY77Uq5w.jpeg",
              }}
              style={{ width: "100%", aspectRatio: 1.8 }}
            />
            <Image
              source={require("./assets/mukaram.png")}
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
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

            <Text>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like). Where does it come from? Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham. Where can I get some? There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </Text>
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
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
