import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  Pressable,
  View,
  ScrollView,
  Alert,
} from 'react-native';

import { useRouter } from "expo-router";
import { MaskedTextInput } from 'react-native-mask-text';
import { api } from '@/services/api';
import { styles } from './sendCode.css';

export default function EnviarCodigo() {
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSendCode = async () => {
    setSubmitting(true);
    try {
      const result = await api.requestPasswordCode(phone);
      router.push({ pathname: '/verificationCode/verificationCode', params: { telefone: phone, devCode: result.codigo || '' } });
    } catch (error) {
      Alert.alert('Não foi possível enviar', error.message);
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

          <Text style={styles.title}>
            Enviar Código
          </Text>

          <Image
            source={require('../../img/sendCode/image.png')}
            style={styles.phone}
            resizeMode="contain"
          />

          <Text style={styles.description}>
            Digite seu número cadastrado para{'\n'}
            enviarmos o código para trocar a senha
          </Text>

          <View style={styles.form}>

            <Text style={styles.label}>
              Telefone:
            </Text>

            <MaskedTextInput
              mask="(99) 99999-9999"
              style={styles.input}
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Insira seu telefone"
              placeholderTextColor="#B5B5B5"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              autoComplete="tel"
            />

            <Text style={styles.confirmation}>
              Confirme o número para continuar.
            </Text>

            <Pressable style={styles.button} onPress={handleSendCode} disabled={submitting}>
              <Text style={styles.buttonText}>
                {submitting ? 'Enviando...' : 'Enviar'}
              </Text>
            </Pressable>

          </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
