import { SyntheticEvent, useCallback, useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { Menu } from "../../components/Menu"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"
import { GlobalContainer } from "../../styles/global"
import { ICarrinho, IProduto } from "../../@types/interfaces"
import { formatValueBR } from "../../services/format"

export const Produto = () => {
  const [produto, setProduto] = useState<IProduto>()
  const { id } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://localhost:3000/produtos/${id}`)
      .then(res => setProduto(res.data))
      .catch((err: AxiosError) => console.error(err))
  }, [id])

  const onSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault(); //Não deixa atualizar a página
    //Pega o valor do input e tipa ele para evitar repetição
    const target = e.target as typeof e.target & {
      quantidade: { value: number }
    }
    //Verifica se o produto da requisição existe
    if (produto) {
      //Pega o valor digitado no input
      let qtd = target.quantidade.value
      if (qtd > 0) {
        //Adiociona um novo objeto produto com base no objeto antigo com novas propriedades
        let objProduto = {
          ...produto, //Sprad Operator -> se a propriedade existir no objeto ele é adualizado, senão é adicionada uma nova propriedade
          quantidade: qtd,
          total: Number(produto.promo) * qtd
        }
        //pega o valor do carrinho
        let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')
        //Cria um array de obj carrino
        let carrinho: ICarrinho[] = []
        //Converte em JSON o local storage salvo em string
        if (typeof lsCarrinho === 'string') {
          carrinho = JSON.parse(lsCarrinho)
        }
        //Verifica se o carrinho existe
        if (carrinho.length > 0) {
          let igual = false
          carrinho.forEach(produto => {
            if (produto.id === objProduto.id) {
              igual = true
              let qtd = Number(produto.quantidade) + Number(objProduto.quantidade)
              produto.quantidade = qtd
              produto.total = Number(produto.promo) * qtd
            }
          })
          if(!igual){
            //Adiciona um novo produto no array de carrinho
            carrinho.push(objProduto)
          }
          //Converte o array de carrinho em JSON
          localStorage.setItem('@1pitchau:carrinho', JSON.stringify(carrinho))
        } else {
          //Senão cria um carrinho
          localStorage.setItem('@1pitchau:carrinho', JSON.stringify([objProduto]))
        }
        navigate('/carrinho')
      }
    }
  }, [produto])

  return (
    <>
      <Menu />
      <GlobalContainer>
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
              {formatValueBR(Number(produto?.valor))}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              {formatValueBR(Number(produto?.promo))}
            </p>
            <form
              onSubmit={onSubmit}
              style={{
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
              <Button type="submit">
                <TextButton>
                  Adicionar ao Carrinho
                </TextButton>
              </Button>
            </form>
          </Col6>
        </Row>
      </GlobalContainer>
    </>
  )
}