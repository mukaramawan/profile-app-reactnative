import { StyleSheet, Text, View, Image } from "react-native";

export default function ProjectCard({ name, image }) {
  return (
    <View>
      <Image style={styles.image} source={image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </View>
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
