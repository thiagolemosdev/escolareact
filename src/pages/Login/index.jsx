import React from 'react'
import { Container } from '../../styles/GlobalStyles'
import { Title } from './styled'
// import { Container } from '../../styles/GlobalStyles'

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Teste</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button">Enviar</button>
    </Container>
  )
}
