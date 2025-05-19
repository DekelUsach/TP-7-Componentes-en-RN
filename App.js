import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

export default function App() {
  const fondo = require("./assets/shiganshina.png");
  const fotoPerfil = require("./assets/foto-perfil.png");

  const mostrarAlerta = () => {
    alert("¡Hola!", "Este es un mensaje de alerta.");
  };
  
  return (
    <ImageBackground source={fondo} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.vista}>
        <View style={styles.vista}>
          <Image source={fotoPerfil} style={styles.imagenPerfil} />
          <Text style={styles.texto}>Dekel Usach</Text>
          <Text style={styles.texto2}>Back-end developer</Text>
          <TextInput
            style={styles.input}
            placeholder="Comenta algo..."
            placeholderTextColor="white"
          />
          
          <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
            <Text style={styles.botonTexto}>Mostrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  texto: {
color: "white",
fontSize: 40
  },
  texto2: {
    color: "white",
    fontSize: 20
      },
  vista: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    maxHeight: 500,
    minWidth: 400,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: "rgba(234, 234, 234, 0.35)",
    borderRadius: 20,
    borderColor: "rgba(236, 236, 236, 0.8)",
    borderWidth: 0.1,
    color: "white",
    paddingLeft: 5, 
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 10
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "rgba(234, 234, 234, 0.35)",
    borderRadius: 20,
    borderColor: "rgba(236, 236, 236, 0.8)",
    borderWidth: 0.1,
    color: "white",
    paddingLeft: 5, 
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10
  },
  imagenPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10
  },
  botonTexto: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    
  }
});
