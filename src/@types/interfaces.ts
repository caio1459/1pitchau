export interface ICarrinho {
  id: number;
  nome: string;
  valor: string;
  promo: string;
  id_categoria: number;
  promoNumber: string;
  imagemg: string;
  imagemp: string;
  quantidade: number;
  total: number;
}

export interface IProduto {
  id: number;
  nome: string;
  valor: string;
  promo: string;
  id_categoria: number;
  promoNumber: string;
  imagemg: string;
  imagemp: string;
}

export interface IContato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  mensagem: string;
}

export interface ICidade {
  id: number;
  nome: string;
}
