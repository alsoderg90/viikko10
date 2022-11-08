import { Pressable, View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import theme from '../theme'

const initialValues = {
  username: '',
  password: ''
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  signInBtn: {
    backgroundColor: theme.colors.primary
  },
  signInTxt: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 5
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput name='password' placeholder='Password' />
          <Pressable style={styles.signInBtn} onPress={handleSubmit}>
            <Text style={styles.signInTxt}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

export default SignIn
