import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';

import BottomNavigation from '@/components/bottom-navigation';
import JobCard from '@/components/job-card';
import { api } from '@/services/api';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.jobs()
      .then(setJobs)
      .catch((requestError) => setError(requestError.message || 'Tente novamente mais tarde.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>OPORTUNIDADES</Text>
        <Text style={styles.title}>Vagas disponíveis</Text>
        <Text style={styles.description}>Encontre oportunidades que combinam com você.</Text>

        {loading && <ActivityIndicator style={styles.state} size="large" color="#167D98" />}
        {!loading && error ? <Text style={styles.stateText}>{error}</Text> : null}
        {!loading && !error && jobs.length === 0 ? (
          <Text style={styles.stateText}>Nenhuma vaga disponível no momento.</Text>
        ) : null}

        {!loading && !error && jobs.map((job, index) => (
          <JobCard key={job.idVaga ?? `${job.titulo}-${index}`} job={job} />
        ))}
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F8F8',
  },
  content: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 120,
  },
  eyebrow: {
    color: '#167D98',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    marginTop: 8,
    color: '#183239',
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    marginBottom: 22,
    color: '#59666C',
    fontSize: 15,
    lineHeight: 22,
  },
  state: {
    marginTop: 36,
  },
  stateText: {
    paddingVertical: 28,
    color: '#59666C',
    fontSize: 15,
    textAlign: 'center',
  },
});
/*import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomNavigation from '@/components/bottom-navigation';
import { api } from '@/services/api';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.jobs()
      .then(setJobs)
      .catch((requestError) => setError(requestError.message || 'Tente novamente mais tarde.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>OPORTUNIDADES</Text>
        <Text style={styles.title}>Vagas disponíveis</Text>
        <Text style={styles.description}>Encontre oportunidades que combinam com você.</Text>

        {loading && <ActivityIndicator style={styles.state} size="large" color="#167D98" />}
        {!loading && error ? <Text style={styles.stateText}>{error}</Text> : null}
        {!loading && !error && jobs.length === 0 ? (
          <Text style={styles.stateText}>Nenhuma vaga disponível no momento.</Text>
        ) : null}

        {!loading && !error && jobs.map((job, index) => (
          <View key={job.idVaga ?? `${job.titulo}-${index}`} style={styles.job}>
            <View style={styles.jobIcon}>
              <Ionicons name="briefcase-outline" size={22} color="#167D98" />
            </View>
            <View style={styles.jobDetails}>
              <Text style={styles.jobTitle}>{job.titulo || job.title || 'Vaga disponível'}</Text>
              <Text style={styles.company}>{job.empresa || job.company || 'Empresa'}</Text>
              <View style={styles.metadata}>
                <Ionicons name="location-outline" size={15} color="#68747C" />
                <Text style={styles.metadataText}>{job.cidade || job.city || 'Local a combinar'}</Text>
              </View>
              <View style={styles.metadata}>
                <Ionicons name="cash-outline" size={15} color="#68747C" />
                <Text style={styles.metadataText}>{job.salario || job.salary || 'Salário a combinar'}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#8A969D" />
          </View>
        ))}
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F8F8',
  },
  content: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 120,
  },
  eyebrow: {
    color: '#167D98',
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    marginTop: 8,
    color: '#183239',
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    marginBottom: 22,
    color: '#59666C',
    fontSize: 15,
    lineHeight: 22,
  },
  state: {
    marginTop: 36,
  },
  stateText: {
    paddingVertical: 28,
    color: '#59666C',
    fontSize: 15,
    textAlign: 'center',
  },
  job: {
    width: '100%',
    minHeight: 116,
    marginBottom: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DCE6E8',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  jobIcon: {
    width: 42,
    height: 42,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: '#E8F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobDetails: {
    flex: 1,
    minWidth: 0,
  },
  jobTitle: {
    color: '#183239',
    fontSize: 16,
    fontWeight: '700',
  },
  company: {
    marginTop: 3,
    marginBottom: 8,
    color: '#59666C',
    fontSize: 14,
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 3,
  },
  metadataText: {
    flexShrink: 1,
    color: '#68747C',
    fontSize: 13,
  },
});
import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Alert, Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    api.jobs().then(setJobs).catch((error) => Alert.alert('Não foi possível carregar vagas', error.message));
  }, []);
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      import { useEffect, useState } from 'react';
      import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
      import { Ionicons } from '@expo/vector-icons';

      import BottomNavigation from '@/components/bottom-navigation';
      import { api } from '@/services/api';

      export default function JobsPage() {
        const [jobs, setJobs] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');

        useEffect(() => {
          api.jobs()
            .then(setJobs)
            .catch((requestError) => setError(requestError.message || 'Tente novamente mais tarde.'))
            .finally(() => setLoading(false));
        }, []);

        return (
          <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
              <Text style={styles.eyebrow}>OPORTUNIDADES</Text>
              <Text style={styles.title}>Vagas disponíveis</Text>
              <Text style={styles.description}>Encontre oportunidades que combinam com você.</Text>

              {loading && <ActivityIndicator style={styles.state} size="large" color="#167D98" />}
              {!loading && error ? <Text style={styles.stateText}>{error}</Text> : null}
              {!loading && !error && jobs.length === 0 ? (
                <Text style={styles.stateText}>Nenhuma vaga disponível no momento.</Text>
              ) : null}

              {!loading && !error && jobs.map((job, index) => (
                <View key={job.idVaga ?? `${job.titulo}-${index}`} style={styles.job}>
                  <View style={styles.jobIcon}>
                    <Ionicons name="briefcase-outline" size={22} color="#167D98" />
                  </View>
                  <View style={styles.jobDetails}>
                    <Text style={styles.jobTitle}>{job.titulo || job.title || 'Vaga disponível'}</Text>
                    <Text style={styles.company}>{job.empresa || job.company || 'Empresa'}</Text>
                    <View style={styles.metadata}>
                      <Ionicons name="location-outline" size={15} color="#68747C" />
                      <Text style={styles.metadataText}>{job.cidade || job.city || 'Local a combinar'}</Text>
                    </View>
                    <View style={styles.metadata}>
                      <Ionicons name="cash-outline" size={15} color="#68747C" />
                      <Text style={styles.metadataText}>{job.salario || job.salary || 'Salário a combinar'}</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#8A969D" />
                </View>
              ))}
            </ScrollView>
            <BottomNavigation />
          </View>
        );
      }

      const styles = StyleSheet.create({
        screen: {
          flex: 1,
          backgroundColor: '#F4F8F8',
        },
        content: {
          width: '100%',
          maxWidth: 720,
          alignSelf: 'center',
          paddingHorizontal: 20,
          paddingTop: 36,
          paddingBottom: 120,
        },
        eyebrow: {
          color: '#167D98',
          fontSize: 12,
          fontWeight: '700',
        },
        title: {
          marginTop: 8,
          color: '#183239',
          fontSize: 28,
          fontWeight: '700',
        },
        description: {
          marginTop: 6,
          marginBottom: 22,
          color: '#59666C',
          fontSize: 15,
          lineHeight: 22,
        },
        state: {
          marginTop: 36,
        },
        stateText: {
          paddingVertical: 28,
          color: '#59666C',
          fontSize: 15,
          textAlign: 'center',
        },
        job: {
          width: '100%',
          minHeight: 116,
          marginBottom: 12,
          padding: 16,
          borderWidth: 1,
          borderColor: '#DCE6E8',
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
        jobIcon: {
          width: 42,
          height: 42,
          marginRight: 12,
          borderRadius: 8,
          backgroundColor: '#E8F5F5',
          alignItems: 'center',
          justifyContent: 'center',
        },
        jobDetails: {
          flex: 1,
          minWidth: 0,
        },
        jobTitle: {
          color: '#183239',
          fontSize: 16,
          fontWeight: '700',
        },
        company: {
          marginTop: 3,
          marginBottom: 8,
          color: '#59666C',
          fontSize: 14,
        },
        metadata: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          marginTop: 3,
        },
        metadataText: {
          flexShrink: 1,
          color: '#68747C',
          fontSize: 13,
        },
        });
      },*/
