import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function JobCardContent({ job, showNew, showArrow }) {
  return (
    <>
      <View style={styles.icon}>
        <Ionicons name="briefcase-outline" size={22} color="#167D98" />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{job.titulo || job.title || 'Vaga disponível'}</Text>
        <Text style={styles.company}>{job.empresa || job.company || 'Empresa'}</Text>
        <View style={styles.metadata}>
          <Ionicons name="location-outline" size={15} color="#68747C" />
          <Text style={styles.metadataText}>{job.cidade || job.city || 'Local a combinar'}</Text>
        </View>
        <View style={styles.metadata}>
          <Ionicons name="cash-outline" size={15} color="#68747C" />
          <Text style={styles.metadataText}>{job.salario || job.salary || 'Salário a combinar'}</Text>
        </View>
        {job.horario ? (
          <View style={styles.metadata}>
            <Ionicons name="time-outline" size={15} color="#68747C" />
            <Text style={styles.metadataText}>{job.horario}</Text>
          </View>
        ) : null}
      </View>
      {showNew ? <Text style={styles.badge}>Nova</Text> : null}
      {showArrow ? <Ionicons name="arrow-forward" size={18} color="#167D98" /> : null}
    </>
  );
}

export default function JobCard({ job, href, showNew = false }) {
  const content = <JobCardContent job={job} showNew={showNew} showArrow={Boolean(href)} />;

  if (href) {
    return (
      <Link href={href} asChild>
        <Pressable accessibilityRole="link" style={styles.card}>
          {content}
        </Pressable>
      </Link>
    );
  }

  return <View style={styles.card}>{content}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 104,
    marginBottom: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#DCE6E8',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  icon: {
    width: 42,
    height: 42,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#E8F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flex: 1,
    minWidth: 0,
  },
  title: {
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
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: '#E8F5F5',
    color: '#12697E',
    fontSize: 11,
    fontWeight: '700',
  },
});