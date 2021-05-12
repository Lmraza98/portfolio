import Document, {
  DocumentContext,
  Html,
  Head as NextHead,
  Main,
  NextScript,
} from 'next/document'
export const Head = ({ children, title }) => (
  <React.Fragment>
    <NextHead>

      {children}
    </NextHead>
  </React.Fragment>
);

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  

  render() {
    return (
      <>
      <style global jsx>{`
          html,
          body,
          div#__next{
            height: 100%;
            width: 100%;
            margin: 0px;
            
          }
        `}</style>
      <Html>
        <Head/>
        <script src="https://kit.fontawesome.com/a23e206ba2.js" crossorigin="anonymous"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      </>
    )
  }
}

export default MyDocument