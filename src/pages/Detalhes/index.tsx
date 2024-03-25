import { useEffect, useState } from "react"
import { IProduto } from "../../interfaces/produtos"
import axios, { AxiosError } from "axios"
import { Menu } from "../../components/Menu"
import { useParams } from "react-router-dom"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"

export const Detalhes = () => {
  const [produto, setProduto] = useState<IProduto>()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/produtos/${id}`)
      .then(res => setProduto(res.data))
      .catch((err: AxiosError) => console.error(err))
  }, [])

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 20
          }}>
          Detalhes do Produto
        </h1>
        <Row>
          <Col4>
            <img
              style={{ width: '100%' }}
              src={`https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/${produto?.imagemg}`}
              alt="Imagem Ilustrativa" />
          </Col4>
          <Col6>
            <h3>{produto?.nome}</h3>
            <p style={{ textDecoration: 'line-through' }}>
              {produto?.valor}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              {produto?.promo}
            </p>
            <form style={{
              display: 'flex',
              gap: 20,
            }}>
              <Input
                type="number"
                name="quantidade"
                defaultValue={1}
                min="1"
                required
              />
              <Button>
                <TextButton>
                  Adicionar ao Carrinho
                </TextButton>
              </Button>
            </form>
          </Col6>
        </Row>

      </div>
    </>
  )
}