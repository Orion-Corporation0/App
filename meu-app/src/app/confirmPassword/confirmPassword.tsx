import React, { useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

import styles from './confirmPassword.css';

export default function ConfirmPassword() {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  return (
    <ImageBackground source={require('../../img/login/fundo.png')} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <Text style={styles.title}>Confirme sua</Text>
            <Text style={styles.title}>nova senha</Text>
            <Text style={styles.subtitle}>Digite sua senha e confirme para concluir a alteração</Text>

            <Text style={styles.label}>Nova senha</Text>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Digite sua nova senha" placeholderTextColor="#B5B5B5" secureTextEntry />
            <Text style={styles.hint}>Use pelo menos 8 caracteres e 1 número</Text>

            <Text style={styles.label}>Confirmar nova senha</Text>
            <TextInput style={styles.input} value={confirmation} onChangeText={setConfirmation} placeholder="Digite novamente sua nova senha" placeholderTextColor="#B5B5B5" secureTextEntry />
            <Link href="/login/loginPage" asChild>
              <Pressable style={styles.button}><Text style={styles.buttonText}>Confirmar senha</Text></Pressable>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}