import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View,  TouchableOpacity } from "react-native";

export default function App() {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick(true);
    console.log(click);
  };

  const offClick = () => {
    setClick(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textwhite}>Tarea 1 React Native</Text>
      {click ? (
        <TouchableOpacity style={styles.buttonStyle} onPress={offClick}>
          <Text style={styles.textwhite}>Hola Mundo</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonStyle} onPress={onClick}>
          <Text style={styles.textwhite}>Boton</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202223",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: "#0579EE",
    borderRadius: 10,
    padding: 10,
  },
  textwhite: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
  },
});
