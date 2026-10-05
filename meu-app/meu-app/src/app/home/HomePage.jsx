import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';

import { Link } from 'expo-router'
import { useAuth } from '@/context/AuthContext';
import { api } from '@/services/api';
import BottomNavigation from '@/components/bottom-navigation';
import JobCard from '@/components/job-card';
import styles from './HomePage.css';

export default function HomePage() {
  const { candidate } = useAuth();
  const [home, setHome] = useState({ vagas: [], notificacoes: [] });
  const [loading, setLoading] = useState(() => Boolean(candidate?.idCandidato));
  const [notificationsVisible, setNotificationsVisible] = useState(false);

  useEffect(() => {
    if (!candidate?.idCandidato) return;
    api.home(candidate.idCandidato)
      .then(setHome)
      .catch((error) => Alert.alert('Não foi possível carregar a home', error.message))
      .finally(() => setLoading(false));
  }, [candidate?.idCandidato]);

  return (
    <ImageBackground
      source={require('../../img/fundo.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* =========================
            CABEÇALHO
        ========================= */}

        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Ionicons name="person-outline" size={26} color="#167D98" />
            </View>

            <View style={styles.greetingContainer}>
              <View style={styles.greetingHeadline}>
                <Text style={styles.greeting}>
                  Olá, {candidate?.nome?.trim().split(' ')[0] || 'candidato'}!
                </Text>
              </View>

              <Text style={styles.greetingDescription}>
                Vamos encontrar a vaga ideal para você?
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.notificationButton}
            onPress={() => setNotificationsVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Abrir notificações"
          >
            <Ionicons name="notifications-outline" size={23} color="#173B50" />
            {home.notificacoes.length > 0 && <View style={styles.notificationDot} />}
          </Pressable>
        </View>

        {/* =========================
            ATALHOS
        ========================= */}

        <View style={styles.shortcutsContainer}>

          {/* MEU CURRÍCULO */}

          <Link href="/criarCurriculo" asChild>
            <TouchableOpacity style={styles.shortcutCard}>

            <View style={styles.shortcutIconArea}>

              <Ionicons name="document-text-outline" size={28} color="#42B5F5" />

              <View style={styles.shortcutMic}>
                <Ionicons name="mic-outline" size={19} color="#293760" />
              </View>

            </View>

            <View style={styles.shortcutTextContainer}>

              <Text style={styles.shortcutTitle}>
                {home.candidato?.temCurriculo ? 'Editar currículo' : 'Meu currículo'}
              </Text>

              <Text style={styles.shortcutDescription}>
                {home.candidato?.temCurriculo
                  ? 'Atualize seus dados e experiências'
                  : 'Preencha seus dados passo a passo'}
              </Text>

            </View>

            <View style={styles.shortcutArrowBlue}>
              <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
            </View>

            </TouchableOpacity>
          </Link>


          {/* VAGAS PARA VOCÊ */}

          <Link href="/explore" asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.shortcutCard,
                styles.shortcutCardYellow,
              ])}
            >

            <View style={styles.shortcutIconArea}>

              <Ionicons name="briefcase-outline" size={28} color="#D3A91D" />

              <View style={styles.shortcutMic}>
                <Ionicons name="mic-outline" size={19} color="#293760" />
              </View>

            </View>

            <View style={styles.shortcutTextContainer}>

              <Text style={styles.shortcutTitle}>
                Vagas para você
              </Text>

              <Text style={styles.shortcutDescription}>
                Encontre vagas para{'\n'}
                o seu perfil!
              </Text>

            </View>

            <View style={styles.shortcutArrowYellow}>
              <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
            </View>

            </TouchableOpacity>
          </Link>

        </View>


        {/* =========================
            OUVIR VAGAS
        ========================= */}

        <Link href="/explore" asChild>
          <TouchableOpacity style={styles.listenButton}>
            <Text style={styles.listenText}>Explorar vagas</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" style={styles.listenSpeaker} />
          </TouchableOpacity>
        </Link>


        {/* =========================
            VAGAS PERTO DE VOCÊ
        ========================= */}

        <View style={styles.jobsHeader}>

          <Text style={styles.jobsTitle}>
            Vagas perto de você
          </Text>

          <Link href="/explore" asChild>
            <TouchableOpacity>
              <View style={styles.seeAllButton}>
                <Text style={styles.seeAll}>Ver todas</Text>
                <Ionicons name="arrow-forward" size={15} color="#42B5F5" />
              </View>
            </TouchableOpacity>
          </Link>

        </View>


        {loading ? <ActivityIndicator color="#293760" /> : home.vagas.map((job) => (
          <JobCard key={job.idVaga} job={job} href="/explore" showNew />
        ))}


        {/* =========================
            AJUDA
        ========================= */}

        <View style={styles.helpContainer}>

          <View style={styles.helpPerson}>
            <Ionicons name="headset-outline" size={28} color="#293760" />
          </View>

          <View style={styles.helpTextContainer}>

            <Text style={styles.helpTitle}>
              Precisa de ajuda?
            </Text>

            <Text style={styles.helpDescription}>
              Fale com nossa equipe{'\n'}
              pelo suporte!
            </Text>

          </View>

        </View>

      </ScrollView>


      <BottomNavigation />

      <Modal
        visible={notificationsVisible}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setNotificationsVisible(false)}
      >
        <View style={styles.notificationModal}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setNotificationsVisible(false)}
            accessibilityRole="button"
            accessibilityLabel="Fechar notificações"
          />
          <View style={styles.notificationPopup}>
            <View style={styles.notificationPopupHeader}>
              <View style={styles.notificationPopupHeading}>
                <Ionicons name="notifications-outline" size={19} color="#167D98" />
                <Text style={styles.notificationPopupTitle}>Notificações</Text>
              </View>
              <Pressable
                onPress={() => setNotificationsVisible(false)}
                accessibilityRole="button"
                accessibilityLabel="Fechar"
              >
                <Ionicons name="close" size={21} color="#596970" />
              </Pressable>
            </View>

            {home.notificacoes.length > 0 ? (
              home.notificacoes.map((notification, index) => (
                <View key={notification.idNotificacao || index} style={styles.notificationItem}>
                  <View style={styles.notificationItemDot} />
                  <Text style={styles.notificationItemText}>{notification.mensagem}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.notificationEmpty}>Você não tem novas notificações.</Text>
            )}
          </View>
        </View>
      </Modal>

      </SafeAreaView>
    </ImageBackground>
  );
}