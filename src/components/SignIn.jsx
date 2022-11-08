import { Pressable, View, Text, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import theme from '../theme'
import useSignIn from '../hooks/useSignIn'

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
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
      navigate('/', { replace: true })
    } catch (e) {
      console.log(e)
    }
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
          <FormikTextInput
            name='password'
            type='password'
            placeholder='Password'
          />
          <Pressable style={styles.signInBtn} onPress={handleSubmit}>
            <Text style={styles.signInTxt}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

export default SignIn
