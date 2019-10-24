import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render () {

    return (
      <html lang="en">
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />

          <link href="https://fonts.googleapis.com/css?family=:300,400,700&display=swap" rel="stylesheet" />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />

          <script src="https://kit.fontawesome.com/a00dd54377.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }

}

export default MyDocument
