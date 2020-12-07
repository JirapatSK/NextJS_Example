import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import React from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href={`${process.env.base_path}/vendors/bootstrap.min.css`}
          />
        </Head>
        <body>
          <Main />
          <script
            src={`${process.env.base_path}/vendors/jquery-3.5.1.min.js`}
          />
          <script
            src={`${process.env.base_path}/vendors/bootstrap.bundle.min.js`}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
