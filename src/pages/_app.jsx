import 'normalize.css'
import { ApolloProvider } from '@apollo/client'
import 'assets/styles/custom-scroll.scss'
import 'assets/styles/fonts.scss'
import 'assets/styles/reset.scss'
import { useApollo } from 'graphql/apollo'
import 'lib/LazyLoadImage/effects/opacity.css'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Provider } from 'react-redux'
import { useStore } from 'redux'
import { favoritesInitial } from 'redux/slices/favoritesSlice'
import 'simplebar/dist/simplebar.min.css'
import SwiperCore, {
  A11y,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/swiper.scss'
import { BreakpointContext } from 'utils/context/BreakpointContext.js'
import throttle from 'utils/throttle.js'
import { breakpoints } from 'utils/vars.js'
import { GlobalStyle } from './_app.styled.js'
import { TranslationContext } from 'utils/context/TranslationContext.js'
import Script from 'next/script'
import dynamic from 'next/dynamic'
const DynamicJivo = dynamic(() => import('../components/JivoScript/JivoScript'))

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCoverflow,
])

const initBreakpoints = {
  ultraWide: false,
  fullhd: false,
  notebook: false,
  tablet: false,
  phablet: false,
  mobileLarge: false,
}
const compareBreakpoints = (value, state) => {
  let isEqual = true
  if (!(value.ultraWide === state.ultraWide)) isEqual = false
  if (!(value.fullhd === state.fullhd)) isEqual = false
  if (!(value.notebook === state.notebook)) isEqual = false
  if (!(value.tablet === state.tablet)) isEqual = false
  if (!(value.phablet === state.phablet)) isEqual = false
  if (!(value.mobileLarge === state.mobileLarge)) isEqual = false
  return isEqual
}

// const jivositeScript = ``

const CustomApp = ({
  Component,
  pageProps,
  initialData = __NEXT_DATA__.initialData,
}) => {
  const {
    selectedCurrency,
    selectedLengthUnit,
    projects,
    chartersWeek,
    chartersDay,
    sale,
  } = initialData

  const client = useApollo(pageProps.initialApolloState)
  let initialState = {
    ...pageProps.initialReduxState,
    favorites: favoritesInitial,
  }
  if (selectedCurrency) {
    initialState.currency = selectedCurrency
  }
  if (selectedLengthUnit) {
    initialState.length = selectedLengthUnit
  }
  if (projects) {
    initialState.favorites.project = projects
  }
  if (chartersWeek) {
    initialState.favorites['charter-week'] = chartersWeek
  }
  if (chartersDay) {
    initialState.favorites['charter-day'] = chartersDay
  }
  if (sale) {
    initialState.favorites.sale = sale
  }

  const store = useStore(initialState)

  const [state, setState] = useState(initBreakpoints)
  const [jivo, setJivo] = useState(false)

  const onResize = throttle(() => {
    const width = window.innerWidth
    const value = Object.keys(state).reduce((res, breakpoint) => {
      res[breakpoint] = width <= breakpoints[breakpoint]
      return res
    }, {})
    if (!compareBreakpoints(value, state)) {
      setState(value)
    }
  }, 100)

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])
  useEffect(() => {
    onResize()
    const timeID = setTimeout(() => {
      if (!jivo) {
        setJivo(true)
      }
    }, 5000)
    return () => {
      clearTimeout(timeID)
    }
  }, [])

  // Оборачиваем таблицы в div для адаптивности
  if(process.browser) {
    let table = document.querySelectorAll('table')
    table.forEach( item=> {
      let div = document.createElement('div')
      div.style = 'overflow-x:auto'
      item.parentNode.insertBefore(div, item)
      div.appendChild(item)
    })
  }


  if (Component.print) {
    return (
      <>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Provider store={store}>
            <TranslationContext.Provider value={Component.translation}>
              <Component {...pageProps} />
            </TranslationContext.Provider>
          </Provider>
        </ApolloProvider>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Arcon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <BreakpointContext.Provider value={state}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <TranslationContext.Provider value={Component.translation}>
              {/* <FooterContext.Provider value={footerItems}> */}
              <Component {...pageProps} />
              {/* </FooterContext.Provider> */}
            </TranslationContext.Provider>
          </Provider>
        </ApolloProvider>
      </BreakpointContext.Provider>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=UA-53152530-1"
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', 'UA-53152530-1')
        }}
      />
      {jivo && <DynamicJivo />}
    </>
  )
}

export default CustomApp
