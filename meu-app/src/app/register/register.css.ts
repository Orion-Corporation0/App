import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: { flex: 1 },
  safeArea: { flex: 1 },
  content: { flexGrow: 1, width: '100%', alignItems: 'center', paddingHorizontal: 16, paddingTop: 22, paddingBottom: 32 },
  logo: { alignItems: 'center', justifyContent: 'center', height: 68 },
  logoMark: { color: '#293760', fontSize: 31, fontWeight: '900', lineHeight: 31 },
  logoPlus: { color: '#42B5F5' },
  logoText: { marginTop: 2, color: '#293760', fontSize: 16, fontWeight: '900', letterSpacing: 0.2 },
  panelTitle: { marginTop: -1, color: '#42B5F5', fontSize: 11, fontWeight: '700' },
  title: { marginTop: 16, color: '#293760', fontSize: 26, fontWeight: '800' },
  subtitle: { marginTop: 3, color: '#3039AE', fontSize: 11, fontWeight: '700', textAlign: 'center' },
  form: { width: '100%', maxWidth: 420, alignSelf: 'center', marginTop: 20 },
  label: { marginBottom: 5, color: '#293760', fontSize: 12, fontWeight: '700' },
  input: { width: '100%', height: 40, marginBottom: 12, paddingHorizontal: 12, borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 4, backgroundColor: '#FFFFFF', color: '#333333', fontSize: 12 },
  button: { height: 42, marginTop: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#000B48' },
  buttonText: { color: '#FFFFFF', fontSize: 13, fontWeight: '800' },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#C8C8C8' },
  dividerText: { marginHorizontal: 9, color: '#A3A3A3', fontSize: 10 },
  googleButton: { height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#D1D1D1', borderRadius: 5, backgroundColor: '#FFFFFF' },
  googleText: { color: '#111111', fontSize: 11, fontWeight: '700' },
});

export default styles;