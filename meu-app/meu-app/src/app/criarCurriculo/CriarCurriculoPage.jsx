import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './CriarCurriculoPage.css';
import { Link } from 'expo-router';
import { useResume } from '@/context/ResumeContext';
import BottomNavigation from '@/components/bottom-navigation';
import ResumeStepHeader from '@/components/resume-step-header';
import ResumeProgress from '@/components/resume-progress';
import ResumeField from '@/components/resume-field';

export default function CriarCurriculoPage() {
  const { draft, updateDraft, loading, loadError } = useResume();
  const age = draft.age || '';
  const gender = draft.gender || '';
  const education = draft.education || '';

  const educationOptions = [
    'Ensino Fundamental completo',
    'Ensino Fundamental incompleto',
    'Ensino médio completo',
    'Ensino médio incompleto',
    'Ensino superior completo',
    'Ensino superior incompleto',
  ];

  if (loading) {
    return <SafeAreaView style={styles.container}><ActivityIndicator size="large" color="#167D98" /></SafeAreaView>;
  }

  if (loadError) {
    return <SafeAreaView style={styles.container}><Text style={styles.label}>Não foi possível carregar seu currículo. Volte para a home e tente novamente.</Text></SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* DECORAÇÃO DO TOPO */}

      <View style={styles.topDecoration}>

        <View style={styles.decorationBlue} />

        <View style={styles.decorationLight} />

        <View style={styles.decorationYellow} />

        <View style={styles.decorationDark} />

      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* CABEÇALHO */}

        <ResumeStepHeader step={1} subtitle="Vamos começar com suas informações básicas!" />


        {/* IDADE */}

        <ResumeField icon="calendar-outline" label="Qual sua idade?">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={(value) => updateDraft({ age: value })}
              placeholder="Ex: 25 anos"
              placeholderTextColor="#BDBDBD"
              keyboardType="numeric"
              maxLength={3}
            />
            <Ionicons name="hourglass-outline" size={18} color="#293760" />
          </View>
        </ResumeField>


        {/* GÊNERO */}

        <ResumeField icon="person-outline" label="Qual o seu gênero?">
          <View style={styles.genderContainer}>

              {/* FEMININO */}

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'feminino' &&
                    styles.genderOptionSelected,
                ]}
                onPress={() => updateDraft({ gender: 'feminino' })}
                accessibilityRole="radio"
                accessibilityState={{ selected: gender === 'feminino' }}
                activeOpacity={0.7}
              >

                <Ionicons name="female" size={20} color={gender === 'feminino' ? '#FFFFFF' : '#293760'} />

                <Text style={styles.genderText}>
                  Feminino
                </Text>

              </TouchableOpacity>


              {/* MASCULINO */}

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'masculino' &&
                    styles.genderOptionSelected,
                ]}
                onPress={() => updateDraft({ gender: 'masculino' })}
                accessibilityRole="radio"
                accessibilityState={{ selected: gender === 'masculino' }}
                activeOpacity={0.7}
              >

                <Ionicons name="male" size={20} color={gender === 'masculino' ? '#FFFFFF' : '#293760'} />

                <Text style={styles.genderText}>
                  Masculino
                </Text>

              </TouchableOpacity>


              {/* NÃO BINÁRIO */}

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  gender === 'nao-binario' &&
                    styles.genderOptionSelected,
                ]}
                onPress={() => updateDraft({ gender: 'nao-bin' })}
                accessibilityRole="radio"
                accessibilityState={{ selected: gender === 'nao-bin' }}
                activeOpacity={0.7}
              >

                <Ionicons name="male-female" size={20} color={gender === 'nao-bin' ? '#FFFFFF' : '#293760'} />

                <Text style={styles.genderText}>
                  Não Binário
                </Text>

              </TouchableOpacity>

          </View>
        </ResumeField>


        {/* ESCOLARIDADE */}

        <ResumeField icon="school-outline" label="Qual grau de escolaridade?">
          <View style={styles.educationContainer}>

              {educationOptions.map((option) => {

                const selected = education === option;

                return (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.educationOption,
                      selected &&
                        styles.educationOptionSelected,
                    ]}
                    onPress={() => updateDraft({ education: option })}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    activeOpacity={0.7}
                  >

                    <View
                      style={[
                        styles.radio,
                        selected && styles.radioSelected,
                      ]}
                    >

                      {selected && (
                        <View style={styles.radioInner} />
                      )}

                    </View>

                    <Text style={styles.educationText}>
                      {option}
                    </Text>

                  </TouchableOpacity>
                );

              })}

          </View>
        </ResumeField>


        {/* BOTÃO CONTINUAR */}
        <Link href="/criarCurriculo2/CriarCurriculoPage2" asChild>

        <TouchableOpacity
            style={styles.continueButton}
            activeOpacity={0.8}
        >
            <Text style={styles.continueText}>
            Continuar
            </Text>
        </TouchableOpacity>
        </Link>


        {/* INDICADOR DE ETAPAS */}

        <ResumeProgress step={1} />

      </ScrollView>

      <BottomNavigation />

    </SafeAreaView>
  );
}
