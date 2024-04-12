import { useNavigate } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./style"
import { FaTrash } from "react-icons/fa"
import { GlobalContainer } from "../../styles/global"
import { useCallback, useEffect, useState } from "react"
import { ICarrinho } from "../../@types/interfaces"
import { formatValueBR } from "../../services/format"

export const Carrinho = () => {

  const navigate = useNavigate()
  const [carrinhos, setCarrinhos] = useState<ICarrinho[]>([])
  const [valorTotal, setValorTotal] = useState<number>(0)

  useEffect(() => {
    let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')
    let carrinhos: ICarrinho[] = []

    if (typeof lsCarrinho === 'string') {
      carrinhos = JSON.parse(lsCarrinho)
    }
    if (carrinhos.length > 0) {
      setCarrinhos(carrinhos)
      updateValue(carrinhos)
    }
  }, [])

  const updateValue = useCallback((carrinhos: ICarrinho[]) => {
    let total = 0
    carrinhos.forEach(produto => total = produto.total + total)
    setValorTotal(total)
  }, [])

  return (
    <>
      <Menu />
      <GlobalContainer>
        <h2>Carrinho de Compras</h2>
        <Table>
          <thead>
            <THtr>
              <THTh style={{ minWidth: 300 }}>Nome do Produto</THTh>
              <THTh>Quantidade</THTh>
              <THTh>Valor Unit.</THTh>
              <THTh>Valor Total.</THTh>
              <THTh>Ações</THTh>
            </THtr>
          </thead>
          <tbody>
            {carrinhos.map(produto => (
              <TBTr key={produto.id}>
                <Td width={300}>{produto.nome}</Td>
                <Td>{produto.quantidade}</Td>
                <Td>{formatValueBR(Number(produto.promo))}</Td>
                <Td>{formatValueBR(produto.total)}</Td>
                <Td>
                  <Button type="button">
                    <TextButton>
                      < FaTrash />
                    </TextButton>
                  </Button>
                </Td>
              </TBTr>
            ))}
          </tbody>
          <tfoot>
            <TBTr>
              <Td width={300}>Valor Total</Td>
              <Td></Td>
              <Td></Td>
              <Td>{formatValueBR(valorTotal)}</Td>
              <Td></Td>
            </TBTr>
          </tfoot>
        </Table>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button type="button" bgColor="green">
            <TextButton>Limpar Carrinho</TextButton>
          </Button>
          <Button type="button">
            <TextButton>Finalizar Pedido</TextButton>
          </Button>
        </div>
      </GlobalContainer>
    </>
  )
}
