import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  safeArea: {
    flex: 1,
    width: '100%',
  },

  content: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
    maxWidth: 480,
    alignSelf: 'center',
  },

  title: {
    color: '#29365F',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },

  phone: {
    width: 180,
    height: 165,
    marginTop: 28,
    marginBottom: 16,
  },

  description: {
    width: '100%',
    marginTop: 0,
    marginBottom: 20,
    color: '#74787E',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },

  form: {
    width: '100%',
  },

  label: {
    marginBottom: 6,
    color: '#29365F',
    fontSize: 14,
    fontWeight: '700',
  },

  input: {
    width: '100%',
    minHeight: 46,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    color: '#555555',
    fontSize: 12,
  },

  confirmation: {
    marginTop: 12,
    marginBottom: 14,
    color: '#293FC1',
    fontSize: 15,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#020D4C',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
