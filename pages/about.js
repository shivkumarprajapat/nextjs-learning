import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image'
import styles from './app.module.scss'

export default function about() {

  const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  color: red;
`;
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

  return (
    <section className={styles.sec}>
      <Container>
        <Wrapper>
          <Title>Hello World!</Title>
          <Image src="/images/1.png" alt="me" width="250" height="350" />
        </Wrapper>
      </Container>
    </section>
  )
}
