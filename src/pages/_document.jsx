import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import nextCookies from 'next-cookies'
import { currencyKey, lengthUnitKey } from 'utils/context/DataContext.js'
import getCanonical from 'utils/getCanonical.js'

const getInitialData = (ctx) => {
  const currency = nextCookies(ctx)[currencyKey]
  const lengthUnit = nextCookies(ctx)[lengthUnitKey]
  const project = nextCookies(ctx)['project']
  const chartersWeek = nextCookies(ctx)['charter-week']
  const chartersDay = nextCookies(ctx)['charter-day']
  const sale = nextCookies(ctx)['sale']

  return {
    currency,
    lengthUnit,
    project,
    chartersWeek,
    chartersDay,
    sale,
  }
}

export default class MyDocument extends Document {
  constructor(props) {
    super(props)
    this.print = props.__NEXT_DATA__.props.print || {}

    const { __NEXT_DATA__, initialData } = props
    __NEXT_DATA__.initialData = initialData
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    const initialData = getInitialData(ctx)

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} initialData={initialData} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        initialData,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        router: {
          query: ctx.query,
          locale: ctx.locale,
          asPath: ctx.asPath,
          route: ctx.pathname,
        },
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-53152530-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date()); gtag('config', 'UA-53152530-1');
              `,
            }}
          /> */}
          <link rel="canonical" href={getCanonical(this.props.router)} />
        </Head>
        <body>
          {this.print.header}
          <Main />
          <NextScript />
          {this.print.footer}
        </body>
      </Html>
    )
  }
}
