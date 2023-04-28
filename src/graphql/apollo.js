import {
  InMemoryCache,
  ApolloClient,
  createHttpLink,
  from,
  ApolloLink,
} from '@apollo/client'
import { useMemo, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

let apolloClient
const uri = process.env.NEXT_PUBLIC_API

const httpLink = createHttpLink({ uri })

const createApolloClient = (context) => {
  const languageMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => {
      return {
        headers: {
          ...headers,
          ['X-Lang']: context.locale,
        },
      }
    })

    return forward(operation)
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([languageMiddleware, httpLink]),
    cache: new InMemoryCache().restore(
      typeof window === 'undefined' ? {} : window.__APOLLO_STATE__
    ),
  })
}

export const initializeApollo = (context = null, initializeState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient(context)

  if (initializeState) {
    _apolloClient.cache.restore(initializeState)
  }

  if (typeof window === 'undefined') return _apolloClient

  apolloClient = apolloClient ?? _apolloClient
  return apolloClient
}

export const useApollo = (initialState) => {
  const { locale } = useRouter()
  const context = useRef({ locale })
  const store = useMemo(() => initializeApollo(context.current, initialState), [
    initialState,
  ])

  useEffect(() => {
    context.current.locale = locale
    // store.resetStore()
  }, [locale])

  return store
}
