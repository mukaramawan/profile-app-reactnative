import { StyleSheet, Text, Image, TouchableOpacity, Linking, Alert } from "react-native";

export default function ProjectCard({ name, image, githubUrl }) {

  const onpress = async () => {

    try {
      const supported = await Linking.canOpenURL(githubUrl);

      if (supported) {
        await Linking.openURL(githubUrl);
      } else {
        Alert.alert(`URL is not working: ${githubUrl}`);
      }
    } catch (error) {
      Alert.alert("An error occurred", error.message);
    }
  };

  return (
    <TouchableOpacity onPress={onpress}>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "dimgray",
    marginTop: 10,
  },
});