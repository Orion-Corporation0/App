import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Link, useRouter } from 'expo-router'
import { MaskedTextInput } from 'react-native-mask-text';
import { useAuth } from '@/context/AuthContext';

import styles from './loginPage.css';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    setSubmitting(true);
    try {
      await signIn({ telefone: phone, senha: password });
      router.replace('/home');
    } catch (error) {
      Alert.alert('Não foi possível entrar', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../img/login/fundo.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

      <Text style={styles.logo}>
        EMPREGA +
      </Text>

      <Text style={styles.panelTitle}>
        Painel de acesso
      </Text>

      <Text style={styles.title}>
        Entrar
      </Text>

      <Text style={styles.subtitle}>
        Acesse sua conta para continuar
      </Text>

      <View style={styles.form}>

        <Text style={styles.label}>
          Telefone:
        </Text>

        <MaskedTextInput
          mask="(99) 99999-9999"
          style={styles.input}
          value={phone}
          onChangeText={(formattedText, rawText) => setPhone(rawText || formattedText)}
          placeholder="Insira seu telefone"
          placeholderTextColor="#B5B5B5"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          autoComplete="tel"
        />

        <Text style={styles.label}>
          Confirme a senha:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#B5B5B5"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Link href="/sendCode/sendCode" asChild>
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>
        </Link>

  <Pressable style={styles.button} onPress={handleLogin} disabled={submitting}>
    <Text style={styles.buttonText}>
      {submitting ? 'Entrando...' : 'Entrar'}
    </Text>
  </Pressable>






      </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
