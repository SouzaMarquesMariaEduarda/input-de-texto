import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome aqui"
        value={nome}
        onChangeText={setNome}
      />

      {nome !== '' && (
        <Text style={styles.resultado}>
          Olá, {nome}! ✌️😊
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#993399',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    textShadowColor: '#ff0000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});