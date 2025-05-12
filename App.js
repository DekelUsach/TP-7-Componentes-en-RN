import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  const fondo = require("./assets/shiganshina.png");
  return (
    <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.vista}>
        <View style={styles.vista}>
        <TextInput style={styles.input}></TextInput>


        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  vista: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    height: 300,
    width: 330,
    borderRadius: 5
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    width: 250,
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.35)",

  }
});
