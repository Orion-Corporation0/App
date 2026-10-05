import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ResumeStepHeader({ step, subtitle, onBack }) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          onPress={onBack}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={21} color="#293760" />
        </Pressable>
      ) : (
        <View style={styles.backPlaceholder} />
      )}
      <View style={styles.copy}>
        <Text style={styles.title}>Criar seu currículo</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.stepBadge}>
        <Text style={styles.stepText}>{step}/3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    minHeight: 76,
    marginBottom: 14,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#D6F0FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backPlaceholder: {
    width: 40,
    flexShrink: 0,
  },
  copy: {
    flex: 1,
    minWidth: 0,
    paddingTop: 1,
  },
  title: {
    color: '#293760',
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 3,
    color: '#3F4B52',
    fontSize: 14,
    lineHeight: 20,
  },
  stepBadge: {
    minWidth: 42,
    minHeight: 30,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#167D98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});