import { StyleSheet } from "react-native"
import { mainColors as Color } from "./colors"

export const s = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.secondary,
  },

  textLoadingApp: {
    fontSize: 18,
    color: Color.white,
  }
})