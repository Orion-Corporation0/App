import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: { flex: 1 },
  safeArea: { flex: 1 },
  content: { flexGrow: 1, width: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 32 },
  form: { width: '100%', maxWidth: 420, alignSelf: 'center' },
  title: { color: '#293760', fontSize: 20, fontWeight: '800', lineHeight: 23, textAlign: 'center' },
  subtitle: { marginTop: 8, marginBottom: 25, color: '#3039AE', fontSize: 14, fontWeight: '600', lineHeight: 20, textAlign: 'center' },
  label: { marginBottom: 6, color: '#293760', fontSize: 14, fontWeight: '700' },
  input: { width: '100%', minHeight: 46, paddingHorizontal: 12, borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 5, backgroundColor: '#FFFFFF', color: '#333333', fontSize: 14 },
  hint: { marginTop: 5, marginBottom: 15, color: '#6B7479', fontSize: 12 },
  button: { minHeight: 48, marginTop: 18, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#000B48' },
  buttonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});

export default styles;