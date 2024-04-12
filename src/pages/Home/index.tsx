import { useEffect, useState } from "react";
import { Card } from "../../components/Card"
import { Menu } from "../../components/Menu"
import axios, { AxiosError } from "axios";
import { IProduto } from "../../@types/interfaces";
import { formatValueBR } from "../../services/format";

export const Home = () => {

  const [produtos, setProdutos] = useState<IProduto[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then(res => setProdutos(res.data))
      .catch((err: AxiosError) => console.error(err))
  }, [])

  return (
    <>
      <Menu />
      <div style={{
        paddingLeft: '6%',
        paddingRight: '6%',
      }}>
        <h2 style={{
          marginTop: 10,
          textAlign: 'center'
        }}>
          Produtos em Destaque
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {
            produtos.map((produto) => {
              return (
                <Card
                  key={produto.id}
                  id={String(produto.id)}
                  nome={produto.nome}
                  preco={formatValueBR(Number(produto.valor))}
                  preco_promo={formatValueBR(Number(produto.promo))}
                  imagemp={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/' + produto.imagemp}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
