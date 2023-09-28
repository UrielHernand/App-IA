import React from "react";
import { Button, TextInput, View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./StyleRegister";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStart}>
       

         <View style={styles.logo}>
        


        <Image source={require("../../../assets/logoRegister.png")} />
   
         </View>
      </View>

      <View style={styles.form}>
      <Text style={styles.startText}>Registro</Text>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} placeholder="Nombre" />
        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} placeholder="Correo" />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" />
        <Button title="Registrarse" color="#6932B9" />
      </View>

      <View style={styles.loginText}>
        <Text>¿Ya tienes una cuenta?</Text>
         <TouchableHighlight onPress={() => navigation.navigate("Login")}>

        <Text style={{ fontWeight: "900" }}> Inicia sesión</Text>
      </TouchableHighlight>
      </View>
    </View>
  );
}
