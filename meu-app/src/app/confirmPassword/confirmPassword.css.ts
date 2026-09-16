import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: { flex: 1 },
  safeArea: { flex: 1 },
  content: { flexGrow: 1, width: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 32 },
  form: { width: '100%', maxWidth: 420, alignSelf: 'center' },
  title: { color: '#293760', fontSize: 20, fontWeight: '800', lineHeight: 23, textAlign: 'center' },
  subtitle: { marginTop: 8, marginBottom: 25, color: '#3039AE', fontSize: 8, fontWeight: '700', lineHeight: 11, textAlign: 'center' },
  label: { marginBottom: 4, color: '#293760', fontSize: 8, fontWeight: '700' },
  input: { width: '100%', height: 31, paddingHorizontal: 10, borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 3, backgroundColor: '#FFFFFF', color: '#333333', fontSize: 8 },
  hint: { marginTop: 4, marginBottom: 15, color: '#B5B5B5', fontSize: 7 },
  button: { height: 31, marginTop: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: '#000B48' },
  buttonText: { color: '#FFFFFF', fontSize: 9, fontWeight: '800' },
});

export default styles;