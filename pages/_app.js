import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SOUNDFUCK</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        * {
          font-family: 'Staatliches';
        }
        body {
          background-image: radial-gradient(
              ellipse at 7% 37%,
              hsla(268.88, 89.92%, 53.33%, 0.5745343155128657) 63%,
              hsl(258deg 60% 61% / 47%) 74%
            ),
            repeating-conic-gradient(
              from 9deg at 71% 50%,
              hsla(178.27, 45.61%, 44.71%, 0.32004544202424423) 59%,
              hsla(34.5, 74.77%, 41.96%, 0.15199841708756545) 65%
            ),
            repeating-linear-gradient(
              189deg,
              hsla(223.49, 83.26%, 44.51%, 0.3768169921057085) 25%,
              hsla(136.07, 34.15%, 32.16%, 0.4620837947703391) 50%
            ),
            repeating-radial-gradient(
              circle at 67% 26%,
              hsla(157.5, 45.9%, 47.84%, 0.9553453577787783) 20%,
              hsl(0deg 0% 0% / 43%) 90%
            ),
            repeating-radial-gradient(
              ellipse at 38% 49%,
              #df0a2f 48%,
              #1c39fd 73%
            );
        }
      `}</style>
    </>
  )
}

export default MyApp
