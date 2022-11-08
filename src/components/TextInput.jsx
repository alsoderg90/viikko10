import {
  TextInput as NativeTextInput,
  StyleSheet
} from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderRadius: 5
  },
  error: {
    borderColor: 'red'
  }
})

const TextInput = ({ error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error]

  return (
    <NativeTextInput
      style={textInputStyle}
      {...props}
      placeholderTextColor='grey'
    />
  )
}

export default TextInput
