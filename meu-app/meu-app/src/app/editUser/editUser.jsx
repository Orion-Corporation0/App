import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Link, Redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/services/api';
import { buildResumeHtml } from '@/services/resumePdf';
import BottomNavigation from '@/components/bottom-navigation';

import styles from './editUser.css';

const EditUser = () => {
  const { candidate } = useAuth();
  const [data, setData] = useState({ formations: [], experiences: [], jobHistory: [] });
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState('personal');
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState('');
  const [savingName, setSavingName] = useState(false);
  const [generatingPdf, setGeneratingPdf] = useState(false);

  useEffect(() => {
    if (!candidate?.idCandidato) return;
    api.profile(candidate.idCandidato)
      .then((profile) => {
        setData({
          ...profile,
          name: profile.name || profile.nome || '',
          phone: profile.phone || profile.telefone || '',
          formations: profile.formations || [],
          experiences: profile.experiences || [],
          jobHistory: profile.jobHistory || [],
        });
        setNameDraft(profile.nome || profile.name || '');
      })
      .catch((error) => Alert.alert('Não foi possível carregar o perfil', error.message))
      .finally(() => setLoading(false));
  }, [candidate?.idCandidato]);

  if (!candidate?.idCandidato) {
    return <Redirect href="/login/loginPage" />;
  }

  if (loading) {
    return <SafeAreaView style={styles.safeArea}><ActivityIndicator size="large" color="#43BDE5" /></SafeAreaView>;
  }

  const firstName =
    data.name?.trim().split(' ')[0] || 'Usuário';

  const toggleSection = (section) => {
    setOpenSection(current =>
      current === section ? null : section
    );
  };

  const handleSaveName = async () => {
    const nome = nameDraft.trim();
    if (!nome) {
      Alert.alert('Nome obrigatório', 'Informe seu nome para salvar as alterações.');
      return;
    }

    setSavingName(true);
    try {
      const profile = await api.updateProfile(candidate.idCandidato, { nome });
      setData((current) => ({ ...current, ...profile, name: profile.nome || nome }));
      setEditingName(false);
    } catch (error) {
      Alert.alert('Não foi possível atualizar', error.message);
    } finally {
      setSavingName(false);
    }
  };

  const handleGenerateResume = async () => {
    if (!data.idCurriculo) {
      Alert.alert('Currículo não encontrado', 'Salve seu currículo antes de gerar o PDF.');
      return;
    }

    setGeneratingPdf(true);
    try {
      const html = buildResumeHtml(data);
      if (Platform.OS === 'web') {
        await Print.printAsync({ html });
        return;
      }

      const { uri } = await Print.printToFileAsync({ html });
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, {
          mimeType: 'application/pdf',
          dialogTitle: `Currículo de ${data.name || 'candidato'}`,
          UTI: 'com.adobe.pdf',
        });
      } else {
        await Print.printAsync({ uri });
      }
    } catch (error) {
      Alert.alert('Não foi possível gerar o PDF', error.message || 'Tente novamente.');
    } finally {
      setGeneratingPdf(false);
    }
  };

  const renderArrow = (section) => {
    const opened = openSection === section;

    return (
      <Ionicons
        name={
          opened
            ? 'chevron-down-outline'
            : 'chevron-forward-outline'
        }
        size={22}
        color="#C6CDD2"
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>

          {/* FUNDO */}
          <View style={styles.topLeftShape} />
          <View style={styles.topLightBlueShape} />
          <View style={styles.topCreamShape} />
          <View style={styles.topRightShape} />
          <View style={styles.rightBlueShape} />
          <View style={styles.bottomCreamShape} />
          <View style={styles.bottomBlueShape} />
          <View style={styles.bottomDarkShape} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              styles.scrollContent
            }
          >
            {/* VOLTAR */}
            <View style={styles.header}>
              <Link href="/home" asChild>
                <TouchableOpacity
                  style={styles.backButton}
                  activeOpacity={0.8}
                >
                  <Ionicons
                    name="arrow-back"
                    size={23}
                    color="#293760"
                  />
                </TouchableOpacity>
              </Link>
            </View>

            {/* HERO */}
            <View style={styles.hero}>
              <View style={styles.heroTextContainer}>
                <View style={styles.greetingRow}>
                  <Text style={styles.greeting}>
                    Olá, {firstName}!
                  </Text>

                  <Ionicons
                    name="hand-left-outline"
                    size={22}
                    color="#F3C02D"
                    style={styles.waveIcon}
                  />
                </View>

                <Text style={styles.description}>
                  Aqui é o seu espaço,{'\n'}
                  atualize suas informações{'\n'}
                  caso necessário!
                </Text>
              </View>

              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Ionicons
                    name="person"
                    size={45}
                    color="#FFFFFF"
                  />
                </View>

              </View>
            </View>

            {/* MEUS DADOS */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('personal')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="person-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Meus dados
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Nome, telefone, e-mail...
                  </Text>
                </View>

                {renderArrow('personal')}
              </TouchableOpacity>

              {openSection === 'personal' && (
                <View style={styles.expandedContent}>
                  <View style={styles.infoRow}>
                    {editingName ? (
                      <TextInput
                        style={styles.nameInput}
                        value={nameDraft}
                        onChangeText={setNameDraft}
                        placeholder="Seu nome"
                        accessibilityLabel="Editar nome"
                      />
                    ) : (
                      <Text style={styles.infoText}>
                        <Text style={styles.infoLabel}>Nome: </Text>
                        {data.name || 'Não informado'}
                      </Text>
                    )}

                    <TouchableOpacity
                      disabled={savingName}
                      onPress={editingName ? handleSaveName : () => setEditingName(true)}
                    >
                      <Text style={styles.editText}>
                        {savingName ? 'Salvando...' : editingName ? 'Salvar' : 'Editar'}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {editingName && (
                    <TouchableOpacity onPress={() => setEditingName(false)}>
                      <Text style={styles.cancelEditText}>Cancelar</Text>
                    </TouchableOpacity>
                  )}

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Telefone:{' '}
                      </Text>

                      {data.phone || 'Não informado'}
                    </Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Email:{' '}
                      </Text>

                      {data.email || 'Não informado'}
                    </Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                      <Text style={styles.infoLabel}>
                        Endereço:{' '}
                      </Text>

                      {data.address || 'Não informado'}
                    </Text>
                  </View>
                </View>
              )}
            </View>

            {/* FORMAÇÕES */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('formations')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="school-outline"
                    size={23}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Minha Formação
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Grau de escolaridade, cursos feitos...
                  </Text>
                </View>

                {renderArrow('formations')}
              </TouchableOpacity>

              {openSection === 'formations' && (
                <View style={styles.expandedContent}>
                  {data.formations?.length > 0 ? (
                    data.formations.map(
                      (formation, index) => (
                        <View
                          key={`${formation.course}-${index}`}
                          style={[
                            styles.listItem,
                            index ===
                              data.formations.length - 1 &&
                              styles.lastListItem,
                          ]}
                        >
                          <View
                            style={
                              styles.listIconContainer
                            }
                          >
                            <Ionicons
                              name="school-outline"
                              size={17}
                              color="#43BDE5"
                            />
                          </View>

                          <View
                            style={
                              styles.listTextContainer
                            }
                          >
                            <Text
                              style={styles.itemTitle}
                            >
                              {formation.course}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {formation.institution}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {formation.year}
                            </Text>
                          </View>
                        </View>
                      )
                    )
                  ) : (
                    <Text style={styles.emptyText}>
                      Nenhuma formação cadastrada.
                    </Text>
                  )}
                </View>
              )}
            </View>

            {/* EXPERIÊNCIAS */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('experiences')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="briefcase-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Minhas experiências
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Trabalhos feitos...
                  </Text>
                </View>

                {renderArrow('experiences')}
              </TouchableOpacity>

              {openSection === 'experiences' && (
                <View style={styles.expandedContent}>
                  {data.experiences?.length > 0 ? (
                    data.experiences.map(
                      (experience, index) => (
                        <View
                          key={`${experience.company}-${index}`}
                          style={[
                            styles.listItem,
                            index ===
                              data.experiences.length -
                                1 &&
                              styles.lastListItem,
                          ]}
                        >
                          <View
                            style={
                              styles.listIconContainer
                            }
                          >
                            <Ionicons
                              name="briefcase-outline"
                              size={17}
                              color="#43BDE5"
                            />
                          </View>

                          <View
                            style={
                              styles.listTextContainer
                            }
                          >
                            <Text
                              style={styles.itemTitle}
                            >
                              {experience.role}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {experience.company}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {experience.duration}
                            </Text>
                          </View>
                        </View>
                      )
                    )
                  ) : (
                    <Text style={styles.emptyText}>
                      Nenhuma experiência cadastrada.
                    </Text>
                  )}
                </View>
              )}
            </View>

            {/* CURRÍCULO */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('resume')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="document-text-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Meu currículo
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Visualize o seu currículo...
                  </Text>
                </View>

                {renderArrow('resume')}
              </TouchableOpacity>

              {openSection === 'resume' && (
                <View style={styles.resumeContent}>
                  {data.idCurriculo ? (
                    <>
                      <Ionicons name="document-text-outline" size={28} color="#167D98" />
                      <View style={styles.resumeText}>
                        <Text style={styles.itemTitle}>Currículo salvo</Text>
                        <Text style={styles.itemDescription}>Gere uma cópia em PDF para salvar ou compartilhar.</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.viewButton}
                        activeOpacity={0.8}
                        onPress={handleGenerateResume}
                        disabled={generatingPdf}
                        accessibilityRole="button"
                        accessibilityLabel="Gerar PDF do currículo"
                      >
                        <Ionicons name="download-outline" size={16} color="#FFFFFF" />
                        <Text style={styles.viewButtonText}>{generatingPdf ? 'Gerando...' : 'Gerar PDF'}</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <Text style={styles.emptyText}>Nenhum currículo salvo para exportar.</Text>
                  )}
                </View>
              )}
            </View>

            {/* HISTÓRICO */}
            <View style={styles.card}>
              <TouchableOpacity
                style={styles.cardHeader}
                activeOpacity={0.8}
                onPress={() =>
                  toggleSection('history')
                }
              >
                <View style={styles.iconCircle}>
                  <Ionicons
                    name="folder-open-outline"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>
                    Histórico de vagas
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Visualize suas vagas...
                  </Text>
                </View>

                {renderArrow('history')}
              </TouchableOpacity>

              {openSection === 'history' && (
                <View style={styles.expandedContent}>
                  {data.jobHistory?.length > 0 ? (
                    data.jobHistory.map(
                      (job, index) => (
                        <View
                          key={`${job.jobTitle}-${index}`}
                          style={[
                            styles.listItem,
                            index ===
                              data.jobHistory.length -
                                1 &&
                              styles.lastListItem,
                          ]}
                        >
                          <View
                            style={
                              styles.listIconContainer
                            }
                          >
                            <Ionicons
                              name="business-outline"
                              size={17}
                              color="#43BDE5"
                            />
                          </View>

                          <View
                            style={
                              styles.listTextContainer
                            }
                          >
                            <Text
                              style={styles.itemTitle}
                            >
                              {job.jobTitle}
                            </Text>

                            <Text
                              style={
                                styles.itemDescription
                              }
                            >
                              {job.company}
                            </Text>

                            <Text
                              style={
                                styles.statusText
                              }
                            >
                              {job.status}
                            </Text>
                          </View>
                        </View>
                      )
                    )
                  ) : (
                    <Text style={styles.emptyText}>
                      Nenhuma vaga no histórico.
                    </Text>
                  )}
                </View>
              )}
            </View>

            {/* AJUDA */}
            <View style={styles.helpContainer}>
              <View style={styles.helpIcon}>
                <Ionicons
                  name="headset-outline"
                  size={23}
                  color="#293760"
                />
              </View>

              <View style={styles.helpTextContainer}>
                <Text style={styles.helpTitle}>
                  Precisa de ajuda?
                </Text>

                <Text style={styles.helpSubtitle}>
                  Fale com a nossa equipe pelo suporte!
                </Text>
              </View>

            </View>
          </ScrollView>

        </View>
      </View>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default EditUser;