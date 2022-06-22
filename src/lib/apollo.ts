import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozypzy1h2801xscbvd4dc7/master',
  cache: new InMemoryCache()
})
