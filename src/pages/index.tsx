import Head from 'next/head'
import { useRandomColor } from '../hooks/useRandomColor'
import { ButtonContainer, Container } from '../styles/pages/home'

export default function Home() {
  const { color, changeColor } = useRandomColor()

  return (
    <>
      <Head>
        <title>useRandomColor - Matheus da Mata</title>
      </Head>

      <Container>
        <ButtonContainer>
          <button style={{ background: color }} onClick={changeColor}>
            Change Color
          </button>
        </ButtonContainer>

        <span>
          Created by{' '}
          <a
            href="https://matheusdamatag.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            @matheusdamatag
          </a>
        </span>
      </Container>
    </>
  )
}
