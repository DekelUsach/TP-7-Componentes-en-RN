import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function Aplicacion() {
  const imagenFondo = require("./assets/shiganshina.png");
  const imagenPerfil = require("./assets/foto-perfil.png");

  const [comentario, ponerComentario] = useState("");
  const [modoOscuro, ponerModoOscuro] = useState(false);

  const mostrarAlerta = () => {
    alert(comentario);
  };

  const cambiarModo = () => ponerModoOscuro(previo => !previo);

  const colorTexto = modoOscuro ? "white" : "black";
  const statusStyle = modoOscuro ? "light" : "dark";
  const statusBgColor = modoOscuro ? "#000000" : "#ffffff";

  return (
    <ImageBackground source={imagenFondo} resizeMode="cover" style={estilos.fondo}>

      <StatusBar style={statusStyle} translucent={false} backgroundColor={statusBgColor} />

      <SafeAreaView style={estilos.contenedorPrincipal}>

        <Pressable style={estilos.botonModo} onPress={cambiarModo}>
          <Text style={[estilos.etiquetaModo, { color: colorTexto }]}> 
            Modo Oscuro: {modoOscuro ? 'Desactivado' : 'Activado'}
          </Text>
        </Pressable>

        <View style={estilos.contenedorFormulario}>
          <Image source={imagenPerfil} style={estilos.imagenPerfil} />
          <Text style={[estilos.textoGrande, { color: colorTexto }]}>Dekel Usach</Text>
          <Text style={[estilos.textoPequeno, { color: colorTexto }]}>Back-end developer</Text>
          <TextInput
            style={[estilos.entradaTexto, { color: colorTexto }]}
            placeholder="Comenta algo..."
            placeholderTextColor={colorTexto}
            value={comentario}
            onChangeText={(nuevo) => ponerComentario(nuevo)}
          />

          <TouchableOpacity style={estilos.boton} onPress={mostrarAlerta}>
            <Text style={[estilos.textoBoton, { color: colorTexto }]}>Mostrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  textoGrande: {
    fontSize: 40,
  },
  textoPequeno: {
    fontSize: 20,
  },
  contenedorPrincipal: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    maxHeight: 500,
    minWidth: 400,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fondo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  entradaTexto: {
    width: 250,
    height: 50,
    backgroundColor: "rgba(234, 234, 234, 0.35)",
    borderRadius: 20,
    borderColor: "rgba(236, 236, 236, 0.8)",
    borderWidth: 0.1,
    paddingLeft: 5,
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 10,
  },
  boton: {
    width: 250,
    height: 50,
    backgroundColor: "rgba(234, 234, 234, 0.35)",
    borderRadius: 20,
    borderColor: "rgba(236, 236, 236, 0.8)",
    borderWidth: 0.1,
    paddingLeft: 5,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  imagenPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
  },
  textoBoton: {
    textAlign: "center",
    fontWeight: "bold",
  },
  botonModo: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  etiquetaModo: {
    fontSize: 18,
  },
  contenedorFormulario: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    maxHeight: 500,
    minWidth: 400,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
