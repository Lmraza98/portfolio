import Document, {
  DocumentContext,
  Html,
  Head as NextHead,
  Main,
  NextScript,
} from 'next/document'
import { GoogleFonts } from "next-google-fonts";
export const Head = ({ children, title }) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
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