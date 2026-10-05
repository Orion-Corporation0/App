import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { api } from '@/services/api';

import styles from './confirmPassword.css';

export default function ConfirmPassword() {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const { telefone, codigo } = useLocalSearchParams();
  const router = useRouter();

  const handleReset = async () => {
    if (password !== confirmation) {
      Alert.alert('Verifique sua senha', 'As senhas informadas não são iguais.');
      return;
    }
    try {
      await api.resetPassword(telefone, codigo, password);
      Alert.alert('Senha alterada', 'Sua senha foi atualizada com sucesso.');
      router.replace('/login/loginPage');
    } catch (error) {
      Alert.alert('Não foi possível alterar', error.message);
    }
  };

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
            <Pressable style={styles.button} onPress={handleReset}><Text style={styles.buttonText}>Confirmar senha</Text></Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}