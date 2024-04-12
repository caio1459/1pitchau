import { Menu } from "../../components/Menu"
import { Table, THtr, THTh, TBTr, Td, Button } from "./style"
import { GlobalContainer } from "../../styles/global"
import { useEffect, useState } from "react"
import { IContato } from "../../interfaces/contatos"
import axios from "axios"
import { FaEye } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const Contatos = () => {
  const [contatos, setContatos] = useState<IContato[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/contatos")
      .then(res => setContatos(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Menu />
      <GlobalContainer>
        <h2>Lista de Contatos</h2>
        <Table>
          <thead>
            <THtr>
              <THTh>Nome</THTh>
              <THTh>Telefone</THTh>
              <THTh>Email</THTh>
              <THTh>Cidade</THTh>
              <THTh style={{ minWidth: 300 }}>Menssagem</THTh>
              <THTh>Detalhes</THTh>
            </THtr>
          </thead>
          <tbody>
            {contatos.map(contato => (
              <TBTr key={contato.id}>
                <Td width={300}>{contato.nome}</Td>
                <Td>{contato.telefone}</Td>
                <Td>{contato.email}</Td>
                <Td>{contato.cidade}</Td>
                <Td>{contato.mensagem}</Td>
                <Td>
                  <Button onClick={() => navigate(`/contatos/${contato.id}`)}>
                    <FaEye />
                  </Button>
                </Td>
              </TBTr>
            ))}
          </tbody>
        </Table>
      </GlobalContainer>
    </>
  )
}