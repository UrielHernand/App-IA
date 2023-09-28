import React from "react";
import { Button, TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./StyleLogin";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStart}>
      

         <View style={styles.logo}>
     

        <Image source={require("../../../assets/logoRegister.png")} />
          </View>
      </View>

      <View style={styles.form}>
      <Text style={styles.startText}>Iniciar Sesión</Text>
        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} placeholder="Correo" />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" />
        <Button title="Iniciar" color="#6932B9" style={styles.Button} />
      </View>

      <View style={styles.loginText}>
        <Text>¿Olvidaste tu contraseña?</Text>
        <Text style={{ fontWeight: "900" }}> Recuperar contraseña</Text>
      </View>

      <View style={styles.loginText}>
        <Text>¿No tienes una cuenta?</Text>

         <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={{ fontWeight: "900" }}> Registrarse</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
