import Head from 'next/head'
import { GlobalStyle } from '../GlobalStyle'
import Body from '../src/components/Body'
import { Container } from '../src/components/Home/style'

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>Login</title>
      </Head>
      <Body />
    </Container>
  )
}
