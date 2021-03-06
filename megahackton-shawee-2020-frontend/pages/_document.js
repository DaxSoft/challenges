/*
:--------------------------------------------------------------------------
:  _document
:--------------------------------------------------------------------------
:
: The contents in this file is meant to create a custom <html> document
*/

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { ServerStyleSheets } from '@material-ui/core/styles'
import { PWA_PRIMARY, DOCUMENT_STYLE } from '../client/styles'
import { M_GTAG } from '../client/libraries/gtag'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />

                    <meta
                        name="viewport"
                        //content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
                    />
                    {/* PWA primary color */}
                    <meta name="theme-color" content={PWA_PRIMARY} />

                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />

                    <link rel="icon" href="/favicon.ico" />
                    <style>{DOCUMENT_STYLE}</style>

                    <M_GTAG />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    }
}
