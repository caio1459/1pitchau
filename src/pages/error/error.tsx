import { Menu } from "../../components/Menu"
import image from "/images/error.png"
import { Container, Image } from "./style"

export const Erro = () => {
  return (
    <>
      <Menu />
      <Container>
        <Image src={image} alt="Pagina não encontrada" />
      </Container>
    </>
  )
}