import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { GlobalContainer } from "../../styles/global"
import { useEffect, useState } from "react"
import axios from "axios"
import { Container, Image, P, SectionImage, SectionInfo, Title } from "./style"
import image from "/images/detalhes.png"
import { IContato } from "../../@types/interfaces"

export const Contato = () => {
  const { id } = useParams()
  const [contato, setContato] = useState<IContato | undefined>(undefined)

  useEffect(() => {
    axios.get(`http://localhost:3000/contatos/${id}`)
      .then(res => setContato(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Menu />
      <GlobalContainer>
        <Container>
          <SectionImage>
            <Image src={image} alt="Imagem de Detalhes" />
          </SectionImage>
          <SectionInfo>
            <Title>Detalhes do contato</Title>
            <P><strong>Nome:</strong> {contato?.nome}</P>
            <P><strong>Email:</strong> {contato?.email}</P>
            <P><strong>Telefone:</strong> {contato?.telefone}</P>
            <P><strong>Cidade:</strong> {contato?.cidade}</P>
            <P><strong>Mensagem:</strong> {contato?.mensagem}</P>
          </SectionInfo>
        </Container>
      </GlobalContainer>
    </>
  )
}