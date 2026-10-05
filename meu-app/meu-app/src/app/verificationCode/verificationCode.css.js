import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },

  celularImg: {
    width: 105,
    height: 125,
    marginTop: 10,
    marginBottom: 22,
  },

  titleContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    color: "#263A70",
    fontSize: 26,
    fontWeight: "900",
    lineHeight: 30,
  },

  description: {
    width: "100%",
    textAlign: "center",
    color: "#777777",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 21,
  },

  codeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 10,
  },

  codeInput: {
    flex: 1,
    maxWidth: 56,
    aspectRatio: 0.78,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 8,
    color: "#263A70",
    fontSize: 22,
    fontWeight: "700",
  },

  confirmText: {
    color: "#303FBA",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 18,
    marginBottom: 14,
    textAlign: "center",
  },

  button: {
    width: "100%",
    minHeight: 48,
    backgroundColor: "#000B48",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  resendText: {
    color: "#B5B5B5",
    fontSize: 12,
    marginTop: 11,
  },
});

export default styles;
