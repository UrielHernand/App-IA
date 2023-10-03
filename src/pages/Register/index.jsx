import React ,{useState} from "react";
import { Button, TextInput, View, Text, Image, TouchableHighlight, ScrollView } from "react-native";
import styles from "./StyleRegister";
import * as ImagePicker from "expo-image-picker";

export default function Register({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
     <ScrollView>
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
         <View style={styles.label}>
          <Text style={styles.label}>Foto de perfil</Text>
            <View style={styles.imageContainer}>
              {image && <Image source={{ uri: image }} style={styles.image} />}
            </View>
        <Button title="Agregar imagen" onPress={pickImage}  color="#210749" />
       
        </View>


        <Button title="Registrarse" color="#6932B9" />
      </View>

      <View style={styles.loginText}>
        <Text>¿Ya tienes una cuenta?</Text>
         <TouchableHighlight onPress={() => navigation.navigate("Login")}>

        <Text style={{ fontWeight: "900" }}> Inicia sesión</Text>
      </TouchableHighlight>
      </View>
    </View>
    </ScrollView>
  );
}
