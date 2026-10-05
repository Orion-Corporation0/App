import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function ResumeField({ icon, label, description, children }) {
  return (
    <View style={styles.field}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={20} color="#293760" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    width: '100%',
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    flexShrink: 0,
    marginTop: 1,
    borderRadius: 7,
    backgroundColor: '#E5F0F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  label: {
    marginBottom: 6,
    color: '#203A45',
    fontSize: 15,
    fontWeight: '700',
  },
  description: {
    marginBottom: 6,
    color: '#59666C',
    fontSize: 12,
    lineHeight: 17,
  },
});