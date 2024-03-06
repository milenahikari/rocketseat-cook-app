import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    color: theme.colors.black,
    marginTop: 42
  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.gray_400,
    marginTop: 12,
    marginBottom:38
  }
})