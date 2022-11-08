import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHENTICATE } from '../grapql/mutations'

import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const payload = await mutate({
      variables: { username, password }
    })
    const { data } = payload
    if (data && data.authenticate) {
      authStorage.setAccessToken(data.authenticate.accessToken)
      apolloClient.resetStore()
    }
    return payload
  }

  return [signIn, result]
}

export default useSignIn
