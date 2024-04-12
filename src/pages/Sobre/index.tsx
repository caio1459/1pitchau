import { Form } from "../../components/Form"
import { Menu } from "../../components/Menu"
import { Container, Description, FormContainer, Title } from "./style"

export const Sobre = () => {
  return (
    <>
      <Menu />
      <Container>
        <Title>Boas Vindas a 1Pitchau</Title>
        <Description>
          A 1Pitchau é uma empresa de e-commerce que se destaca pela oferta de produtos de alta qualidade e design exclusivo, abrangendo moda, acessórios, eletrônicos e artigos para o lar. Seu diferencial está na curadoria cuidadosa, seguindo as últimas tendências e padrões de qualidade elevados. A plataforma online oferece uma experiência de compra intuitiva, destacando-se pela sustentabilidade e compromisso com práticas responsáveis. Com atendimento eficiente e entrega rápida, a 1Pitchau se consolida como uma referência no cenário de e-commerce fictício.
        </Description>
      </Container>
      <FormContainer>
        <Form />
      </FormContainer>
    </>
  )
}