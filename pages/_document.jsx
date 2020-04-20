import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(props) {

    const initialProps = await Document.getInitialProps(props)

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument