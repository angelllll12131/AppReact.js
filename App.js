import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Image } from 'react-native';
import { Button } from 'react-native-elements';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SmartFans</Text>
      <Text style={styles.inciarsesion}>Inicia Sesion</Text>
      
      <Button 
        title="Continuar con Google" 
        buttonStyle={styles.buttongoogle} 
        titleStyle={styles.buttonTextgoogle} 
        onPress={() => Alert.alert('Inicio de sesión')} 
        icon={<Image source={require('./assets/google.png')} style={styles.icon} />} 
        iconLeft 
      /> 

      <Button 
        title="Continuar con Facebook" 
        buttonStyle={styles.buttonfacebook} 
        titleStyle={styles.buttonTextgoogle} 
        onPress={() => Alert.alert('Inicio de sesión')} 
        icon={<Image source={require('./assets/facebook.png')} style={styles.iconface} />} 
        iconLeft 
      />
     
      <Button 
        title="Continuar con Apple" 
        buttonStyle={styles.buttonapple} 
        titleStyle={styles.buttonTextgoogle} 
        onPress={() => Alert.alert('Inicio de sesión')} 
        icon={<Image source={require('./assets/apple.png')} style={styles.iconapple} />} 
        iconLeft 
      />

      <Image source={require('./assets/divider.png')} style={styles.divider} /> 

      <Text style={styles.email}>Email o nombre de usuario</Text>
      <TextInput style={styles.correo} placeholder="Email o nombre de usuario" placeholderTextColor="gray" />
      <Text style={styles.contrasena}>Contraseña</Text>
      <TextInput style={styles.contra} placeholder="Contraseña" placeholderTextColor="gray" />
      <StatusBar style="auto" />
      <Image source={require('./assets/Label.png')} style={styles.label} />  
      
      <Button 
        title="Inciar Sesion" 
        buttonStyle={styles.button} 
        titleStyle={styles.buttonText} 
        onPress={() => navigation.navigate("Opciones")} 
      /> 
    </View>
  );
}

function Opciones({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulofunciones}>SmartFans</Text>
      
      
      <Button 
        title="Configurar
temperatura de 
accion" 
        buttonStyle={styles.buttontemperatura} 
        titleStyle={styles.buttonTextemperatura} 
        onPress={() => navigation.navigate(Configuracion)}
        icon={<Image source={require('./assets/termometro.png')} style={styles.icontemperatura} />} 
        iconRight
      /> 

      <Button 
        title="Apagar / Encender"
        buttonStyle={styles.buttontemperatura} 
        titleStyle={styles.buttonTexEncender} 
        onPress={() => navigation.navigate(ApagarEncender)} 
        icon={<Image source={require('./assets/encendido.png')} style={styles.iconencendido} />} 
        iconRight
      /> 

     
        <Button 
        title="¿Necesitas ayuda?"
        buttonStyle={styles.buttontemperatura} 
        titleStyle={styles.buttonTexEncender} 
        onPress={() => navigation.navigate(Ayuda)} 
        icon={<Image source={require('./assets/ayuda.png')} style={styles.iconencendido} />} 
        iconRight
      /> 

      
      
      <Button 
        title="Volver" 
        buttonStyle={styles.buttonvolver} 
        titleStyle={styles.buttonText} 
        onPress={() => navigation.navigate("Home")} 
      /> 
    </View>
  );
}

function Configuracion({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloconfigtemp}>SmartFans</Text>
      <Text style={styles.configuraciontemp}>Configuracion de temperatura</Text>

      <Button 
        title=""
        buttonStyle={styles.buttontconfiguraciontemp} 
        titleStyle={styles.buttonTexEncender} 
        onPress={() => Alert.alert('Configurar temperatura')} 
        icon={<Image source={require('./assets/temperaturacontrol.png')} style={styles.icontemperaturacontrol} />} 
      /> 
  
      <Button 
        title="Volver" 
        buttonStyle={styles.buttonvolver} 
        titleStyle={styles.buttonText} 
        onPress={() => navigation.navigate("Opciones")} 
      /> 
    </View>
  );
}

function ApagarEncender({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloconfigtemp}>SmartFans</Text>
      <Text style={styles.configuraciontemp}>Apagar / Encender </Text>

      <Button 
        title=""
        buttonStyle={styles.buttontconfiguraciontemp} 
        titleStyle={styles.buttonTexEncender} 
        onPress={() => Alert.alert('Encender / Apagar')} 
        icon={<Image source={require('./assets/encendido.png')} style={styles.iconencendercontrol} />} 
      /> 
  
      <Button 
        title="Volver" 
        buttonStyle={styles.buttonvolver} 
        titleStyle={styles.buttonText} 
        onPress={() => navigation.navigate("Opciones")} 
      /> 
    </View>
  );
}

function Ayuda({ navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.tituloconfigtemp}>SmartFans</Text>
      <Text style={styles.ayudatext}>Dejanos tus comentarios para ayudarte</Text>

      <Text style={styles.label}>Input</Text>
      <TextInput
        style={styles.input}
        placeholder="En que necesitas ayuda?"
        placeholderTextColor="gray"
        multiline={true}
        numberOfLines={4}
        onChangeText={text => setText(text)}
        value={text}
      />
  
      <Button 
        title="Volver" 
        buttonStyle={styles.buttonvolver} 
        titleStyle={styles.buttonText} 
        onPress={() => navigation.navigate("Opciones")} 
      /> 
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false,}} />
        <Stack.Screen name="Opciones" component={Opciones} options={{headerShown: false,}} />
        <Stack.Screen name="Configuracion" component={Configuracion} options={{headerShown: false,}} />
        <Stack.Screen name="ApagarEncender" component={ApagarEncender} options={{headerShown: false,}} />
        <Stack.Screen name="Ayuda" component={Ayuda} options={{headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 250,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    color: '#fff', // Texto blanco dentro del TextInput
    backgroundColor: '#1c1c1c', // Fondo oscuro para el TextInput
    textAlignVertical: 'top', // Alineación del texto al principio
    marginBottom: 50,
  },
  ayudatext:{
    fontSize: 20,
    color: 'white',
    top: -50,
  },
  iconencendercontrol:{
    height: 150,
    width: 300,
  },
  tituloconfigtemp:{
    fontSize: 55,
    color: 'white',
    top: -80,
  },
  icontemperaturacontrol:{
    height: 320,
  },
  buttontconfiguraciontemp:{
    backgroundColor: 'white',
    width: 320,
    height: 400,
    marginBottom: 20,
  },
  configuraciontemp:{
    fontSize: 20,
    color: 'white',
    top: -60,
    fontWeight: 'bold', 
  },
  buttonvolver:{
   backgroundColor: '#1877F2',
    paddingVertical: 15,
    paddingHorizontal: 109,
    borderRadius: 33,
    marginTop: 30,
  },
  titulofunciones:{
    fontSize: 55,
    color: 'white',
    top: -90,
  },
  buttonTexEncender: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    left: 10,
  },
  iconencendido:{
    right: 20,  
  },
  buttonTextemperatura:{
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    left: 40,
  },
  icontemperatura: {
      right: 34,
  },
  buttontemperatura: {
    backgroundColor: 'white',
    width: 350,
    height: 100,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 55,
    color: 'white',
    top: -50,
  },
  inciarsesion: {
    fontSize: 30,
    color: 'white',
    top: -30,
    fontWeight: 'bold',
  },
  correo: {
    
    borderWidth: 1,
    borderColor: 'gray',
    padding: 13,
    width: '80%',
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 4,
    
  },
  contra: {
    
    borderWidth: 1,
    borderColor: 'gray',
    padding: 13,
    width: '80%',
    marginTop: 20,
    borderRadius: 5,
    
    
  },
  email: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    left: -60,
    bottom: -11,
  },
  contrasena: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    left: -115,
    bottom: -11,
  },
  icon: {
    marginLeft: 10,
    left: -57,
    width: 30,
  },
  iconface: {
    marginLeft: 10,
    left: -47,
    width: 30,
  },
  iconapple: {
    marginLeft: 10,
    left: -62,
    width: 30,
  },
  button: {
    backgroundColor: '#1877F2',
    paddingVertical: 15,
    paddingHorizontal: 109,
    borderRadius: 33,
    
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttongoogle: {
    top: -0,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#121212',
    paddingVertical: 15,
    borderRadius: 33,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTextgoogle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 0,
    
  },
  buttonfacebook: {
    top: 10,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#121212',
    paddingVertical: 15,
    borderRadius: 33,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonapple: {
    top: 10,
    marginBottom: 70,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#121212',
    paddingVertical: 15,
    borderRadius: 33,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    top: 10,
    marginBottom: 45,
  },
  divider: {
    bottom: 20,
  }
});

