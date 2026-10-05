import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './CriarCurriculoPage3.css';
import { useRouter } from 'expo-router';
import { useResume } from '@/context/ResumeContext';
import BottomNavigation from '@/components/bottom-navigation';
import ResumeStepHeader from '@/components/resume-step-header';
import ResumeProgress from '@/components/resume-progress';
import ResumeField from '@/components/resume-field';

export default function CriarCurriculoPage3() {
  const { draft, updateDraft, save, saving, loading, loadError } = useResume();
  const router = useRouter();
  const tempoOptions = ['Até 1 ano', '1 a 2 anos', 'Mais de 2 anos'];
  const trabalho = draft.trabalho || '';
  const atividades = draft.atividades || [];
  const tempoExperiencia = draft.tempoExperiencia || '';
  const certificacao = draft.certificacao || '';

  const finishResume = async () => {
    try {
      await save({ trabalho, atividades, tempoExperiencia, certificacao });
      router.replace('/home');
    } catch (error) {
      Alert.alert('Não foi possível salvar', error.message);
    }
  };

  if (loading) return <SafeAreaView style={styles.container}><ActivityIndicator size="large" color="#167D98" /></SafeAreaView>;
  if (loadError) return <SafeAreaView style={styles.container}><Text style={styles.label}>Não foi possível carregar seu currículo. Volte para a home e tente novamente.</Text></SafeAreaView>;

  const trabalhos = [
    {
      id: 'limpeza',
      icon: 'sparkles-outline',
      title: 'Auxiliar de\nlimpeza',
    },
    {
      id: 'caixa',
      icon: 'cash-outline',
      title: 'Operador de\ncaixa',
    },
    {
      id: 'vendedor',
      icon: 'storefront-outline',
      title: 'Vendedor',
    },
    {
      id: 'seguranca',
      icon: 'shield-checkmark-outline',
      title: 'Segurança',
    },
    {
      id: 'motorista',
      icon: 'car-outline',
      title: 'Motorista',
    },
    {
      id: 'producao',
      icon: 'construct-outline',
      title: 'Auxiliar de\nprodução',
    },
    {
      id: 'estoque',
      icon: 'cube-outline',
      title: 'Auxiliar de\nestoque',
    },
    {
      id: 'cozinha',
      icon: 'restaurant-outline',
      title: 'Auxiliar de\ncozinha',
    },
    {
      id: 'outro',
      icon: 'ellipsis-horizontal-outline',
      title: 'Outro',
    },
  ];

  const atividadesOpcoes = [
    'Limpeza de ambientes',
    'Organização de produtos',
    'Atendimento ao público',
    'Operação de caixa',
    'Controle de estoque',
    'Segurança',
    'Venda de produtos',
    'Controle de produção',
    'Outro',
  ];

  const selecionarAtividade = (atividade) => {
    if (atividades.includes(atividade)) {
      updateDraft({ atividades: atividades.filter((item) => item !== atividade) });
    } else {
      updateDraft({ atividades: [...atividades, atividade] });
    }
  };

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
        <ResumeStepHeader
          step={3}
          subtitle="Conte o que você procura e destaque sua experiência."
          onBack={() => router.replace('/criarCurriculo2/CriarCurriculoPage2')}
        />


        {/* TRABALHO QUE PROCURA */}
        <ResumeField icon="briefcase-outline" label="Qual trabalho você procura?">
          <View style={styles.jobsGrid}>

              {trabalhos.map((item) => {

                const selected = trabalho === item.id;

                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.jobOption,
                      selected && styles.jobOptionSelected,
                    ]}
                    onPress={() => updateDraft({ trabalho: item.id })}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    activeOpacity={0.7}
                  >

                    <Ionicons name={item.icon} size={22} color={selected ? '#FFFFFF' : '#293760'} />

                    <Text
                      style={[
                        styles.jobText,
                        selected && styles.jobTextSelected,
                      ]}
                    >
                      {item.title}
                    </Text>

                  </TouchableOpacity>
                );
              })}

          </View>
        </ResumeField>


        {/* ÚLTIMO TRABALHO */}
        <ResumeField
          icon="list-outline"
          label="Quais atividades você já realizou?"
          description="Marque todas as experiências que se aplicam."
        >
          <View style={styles.activitiesGrid}>

              {atividadesOpcoes.map((atividade) => {

                const selected =
                  atividades.includes(atividade);

                return (
                  <TouchableOpacity
                    key={atividade}
                    style={[
                      styles.activityOption,
                      selected && styles.activityOptionSelected,
                    ]}
                    onPress={() =>
                      selecionarAtividade(atividade)
                    }
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: selected }}
                    activeOpacity={0.7}
                  >

                    <View
                      style={[
                        styles.checkbox,
                        selected && styles.checkboxSelected,
                      ]}
                    >
                      {selected && <Ionicons name="checkmark" size={15} color="#FFFFFF" />}
                    </View>

                    <Text style={styles.activityText}>
                      {atividade}
                    </Text>

                  </TouchableOpacity>
                );
              })}

          </View>
        </ResumeField>


        {/* TEMPO DE EXPERIÊNCIA */}
        <ResumeField icon="time-outline" label="Há quanto tempo você trabalha nessa área?">
          <View style={styles.experienceOptions}>
              {tempoOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[styles.experienceOption, tempoExperiencia === option && styles.experienceOptionSelected]}
                  onPress={() => updateDraft({ tempoExperiencia: option })}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: tempoExperiencia === option }}
                >
                  <Text style={[styles.experienceOptionText, tempoExperiencia === option && styles.experienceOptionTextSelected]}>{option}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </ResumeField>


        {/* CURSO / CERTIFICAÇÃO */}
        <ResumeField icon="school-outline" label="Tem cursos ou certificados relacionados? (opcional)">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={certificacao}
              onChangeText={(value) => updateDraft({ certificacao: value })}
              placeholder="Ex.: curso de atendimento ao cliente"
              placeholderTextColor="#BDBDBD"
            />
          </View>
        </ResumeField>


        {/* FINALIZAR */}
            <TouchableOpacity
            style={styles.finishButton}
          onPress={finishResume}
          disabled={saving}
            >
            <Text style={styles.finishText}>
            {saving ? 'Salvando...' : 'Finalizar'}
            </Text>
            </TouchableOpacity>
       


        {/* INDICADOR DE ETAPAS */}
        <ResumeProgress step={3} />

      </ScrollView>

      <BottomNavigation />

    </SafeAreaView>
  );
}

