import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from 'expo-router';



export default function Home() {
  return (
    <ImageBackground
      source={require("../img/fundo.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        {/* Logo */}
        <Image
          source={require("../img/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>

      <View style={styles.container2}>
        <Text style={styles.textLegenda}>Sua jornada começa aqui</Text>

        {/* Botão */}
        <Link href="/register/register" asChild>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/login/loginPage">
          <Text style={styles.TextLink}>Já tem uma conta?</Text>
        </Link>





      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },

  container2:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textLegenda: {
    color: "#2D409B",
    fontSize: 18,
    padding:15,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#0b132b",
    width: "80%",
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  link: {
    marginTop: 20,
    borderRadius: 10,
  },
  TextLink:{
    fontSize:18,
    color: "#009DFF",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },



});