import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  safeArea: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  logo: {
    marginTop: 24,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#293760',
    textAlign: 'center',
  },

  panelTitle: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#42B5F5',
    textAlign: 'center',
  },

  title: {
    marginTop: 42,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#293760',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3039AE',
    textAlign: 'center',
  },

  form: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    marginTop: 54,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#293760',
    marginBottom: 6,
  },

  input: {
    width: '100%',
    height: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 6,
    paddingHorizontal: 15,
    marginBottom: 22,
    fontSize: 13,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: -12,
    marginBottom: 15,
  },

  forgotText: {
    color: '#42B5F5',
    fontWeight: 'bold',
    fontSize: 12,
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  checkbox: {
    width: 17,
    height: 17,
    backgroundColor: '#00009A',
    marginRight: 7,
  },

  rememberText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#111111',
  },

  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#000C46',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  dividerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#BBBBBB',
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#999999',
    fontSize: 13,
  },

  googleButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  googleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#111111',
  },

  googleLogo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 0,
  },
});

export default styles;
