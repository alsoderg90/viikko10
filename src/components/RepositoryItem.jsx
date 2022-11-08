import { Image, View, StyleSheet } from 'react-native'
import millify from 'millify'
import Text from './Text'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10
  },
  flexItem: {
    marginRight: 10,
    textAlign: 'center'
  },
  logo: {
    width: 66,
    height: 58
  },
  info: {
    paddingLeft: 10
  },
  boldText: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 10
  },
  textGrey: {
    color: theme.colors.textSecondary,
    paddingBottom: 10
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    textAlign: 'center',
    width: 'fit-content',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image
          style={styles.logo}
          source={item.ownerAvatarUrl}
        ></Image>
        <View style={styles.info}>
          <Text style={styles.boldText}> {item.fullName}</Text>
          <Text style={styles.textGrey}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View>
          <Text style={[styles.flexItem, styles.boldText]}>
            {millify(item.stargazersCount)}
          </Text>
          <Text style={[styles.flexItem, styles.textGrey]}>
            Stars
          </Text>
        </View>
        <View>
          <Text style={[styles.flexItem, styles.boldText]}>
            {millify(item.forksCount)}
          </Text>
          <Text style={[styles.flexItem, styles.textGrey]}>
            Forks
          </Text>
        </View>
        <View>
          <Text style={[styles.flexItem, styles.boldText]}>
            {millify(item.reviewCount)}
          </Text>
          <Text style={[styles.flexItem, styles.textGrey]}>
            Reviews
          </Text>
        </View>
        <View>
          <Text style={[styles.flexItem, styles.boldText]}>
            {millify(item.ratingAverage)}
          </Text>
          <Text style={[styles.flexItem, styles.textGrey]}>
            Rating
          </Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem
