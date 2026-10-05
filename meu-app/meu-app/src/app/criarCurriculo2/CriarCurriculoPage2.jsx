import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import styles from './CriarCurriculoPage2.css';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useResume } from '@/context/ResumeContext';
import BottomNavigation from '@/components/bottom-navigation';
import ResumeStepHeader from '@/components/resume-step-header';
import ResumeProgress from '@/components/resume-progress';
import ResumeField from '@/components/resume-field';

export default function CriarCurriculoPage2() {
  const { draft, updateDraft, loading, loadError } = useResume();
  const router = useRouter();
  const quantidadeOptions = ['1 empresa', '2 empresas', '3 ou mais empresas'];
  const cep = draft.cep || '';
  const descricao = draft.descricao || '';
  const experiencias = draft.experiencias || '';
  const quantidadeEmpresas = draft.quantidadeEmpresas || '';
  const nomeEmpresa = draft.nomeEmpresa || '';
  const tempoTrabalhado = draft.tempoTrabalhado || '';
  const nuncaTrabalhei = Boolean(draft.nuncaTrabalhei);

  if (loading) return <SafeAreaView style={styles.container}><ActivityIndicator size="large" color="#167D98" /></SafeAreaView>;
  if (loadError) return <SafeAreaView style={styles.container}><Text style={styles.label}>Não foi possível carregar seu currículo. Volte para a home e tente novamente.</Text></SafeAreaView>;

  return (
    <SafeAreaView style={styles.container}>

      {/* Fundo decorativo superior */}
      <View style={styles.topBackground}>
        <View style={styles.blueShape} />
        <View style={styles.lightBlueShape} />
        <View style={styles.yellowShape} />
        <View style={styles.darkBlueShape} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Cabeçalho */}
        <ResumeStepHeader
          step={2}
          subtitle="Conte onde você mora e sua trajetória profissional."
          onBack={() => router.replace('/criarCurriculo')}
        />

        {/* CEP */}
        <ResumeField icon="location-outline" label="Informe o seu CEP">
          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={(value) => {
              const digits = value.replace(/\D/g, '').slice(0, 8);
              updateDraft({ cep: digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits });
            }}
            placeholder="Ex.: 01310-100"
            placeholderTextColor="#BDBDBD"
            keyboardType="numeric"
            maxLength={9}
          />
        </ResumeField>

        {/* Descrição */}
        <ResumeField icon="document-text-outline" label="Sua descrição">
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={descricao}
            onChangeText={(value) => updateDraft({ descricao: value })}
            placeholder="Conte seus pontos fortes, objetivos e disponibilidade."
            placeholderTextColor="#BDBDBD"
            multiline
          />
        </ResumeField>

        {/* Experiências */}
        {!nuncaTrabalhei && <>
        <ResumeField icon="briefcase-outline" label="Experiências">
          <TextInput
            style={styles.input}
            value={experiencias}
            onChangeText={(value) => updateDraft({ experiencias: value })}
            placeholder="Descreva suas funções e atividades anteriores."
            placeholderTextColor="#BDBDBD"
          />
        </ResumeField>

        {/* Quantidade de empresas */}
        <ResumeField icon="business-outline" label="Quantas empresas você já trabalhou?">
          <View style={styles.quantityOptions}>
            {quantidadeOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[styles.quantityOption, quantidadeEmpresas === option && styles.quantityOptionSelected]}
                onPress={() => updateDraft({ quantidadeEmpresas: option })}
                accessibilityRole="radio"
                accessibilityState={{ selected: quantidadeEmpresas === option }}
              >
                <Text style={[styles.quantityOptionText, quantidadeEmpresas === option && styles.quantityOptionTextSelected]}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ResumeField>

        {/* Nome da empresa */}
        <ResumeField icon="storefront-outline" label="Nome da empresa">
          <TextInput
            style={styles.input}
            value={nomeEmpresa}
            onChangeText={(value) => updateDraft({ nomeEmpresa: value })}
            placeholder="Ex: empresa Orion"
            placeholderTextColor="#BDBDBD"
          />
        </ResumeField>

        {/* Tempo trabalhado */}
        <ResumeField icon="time-outline" label="Tempo trabalhado">
          <TextInput
            style={styles.input}
            value={tempoTrabalhado}
            onChangeText={(value) => updateDraft({ tempoTrabalhado: value })}
            placeholder="Ex: 3 anos"
            placeholderTextColor="#BDBDBD"
          />
        </ResumeField>
        </>}

        {/* Nunca trabalhei */}
        <TouchableOpacity
          style={styles.neverWorkedRow}
          activeOpacity={0.75}
          accessibilityRole="switch"
          accessibilityLabel="Nunca trabalhei"
          accessibilityState={{ checked: nuncaTrabalhei }}
          onPress={() => updateDraft({
            nuncaTrabalhei: !nuncaTrabalhei,
            experiencias: !nuncaTrabalhei ? '' : experiencias,
            quantidadeEmpresas: !nuncaTrabalhei ? '' : quantidadeEmpresas,
            nomeEmpresa: !nuncaTrabalhei ? '' : nomeEmpresa,
            tempoTrabalhado: !nuncaTrabalhei ? '' : tempoTrabalhado,
          })}
        >

          <View style={styles.iconBox}>
            <Ionicons name="briefcase-outline" size={19} color="#293760" />
          </View>

          <View style={styles.neverWorkedText}>
            <Text style={styles.neverWorkedTitle}>
              Nunca Trabalhei
            </Text>

            <Text style={styles.neverWorkedDescription}>
              Marque esta opção se ainda não teve emprego formal ou informal.
            </Text>
          </View>

          <View style={[styles.switch, nuncaTrabalhei && styles.switchActive]}>
            <View
              style={[
                styles.switchCircle,
                nuncaTrabalhei && styles.switchCircleActive,
              ]}
            />
          </View>

        </TouchableOpacity>

        {/* Continuar */}
        <Link href="/criarCurriculo3" asChild>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>
              Continuar
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Indicador das páginas */}
        <ResumeProgress step={2} />

      </ScrollView>

      <BottomNavigation />

    </SafeAreaView>
  );
}