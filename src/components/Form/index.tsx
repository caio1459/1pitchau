import { SyntheticEvent, useCallback, useEffect, useState } from "react"
import { Alert, Button, Col, FormStyle, FormTitle, Label } from "./style"
import axios from "axios"
import { useForm } from "react-hook-form"
import { ICidade } from "../../@types/interfaces"

export const Form = () => {
  const [cidades, setCidades] = useState<ICidade[]>([])
  const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  useEffect(() => {
    axios.get('http://localhost:3000/cidades')
      .then(res => setCidades(res.data))
      .catch(err => console.error(err))
  }, [])

  const onSubmit = useCallback((data: {}) => {
    axios.post("http://localhost:3000/contatos", data)
      .then(() => reset()) // Limpa os campos do formulário
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Preencha seus Contatos</FormTitle>
        <Col>
          <Label htmlFor="nome">Nome:</Label>
          <input
            {...register("nome", { required: true })}
            type="text"
            id="nome"
            placeholder="Digite o seu nome"
          />
          {errors.nome?.type === "required" && (<Alert>O nome é obrigatorio!</Alert>)}
        </Col>

        <Col>
          <Label htmlFor="telefone">Telefone:</Label>
          <input
            {...register("telefone", { required: true })}
            type="tel"
            id="telefone"
            placeholder="Digite o seu telefone"
            maxLength={11}
          />
          {errors.telefone?.type === "required" && (<Alert>O Telefone é obrigatorio!</Alert>)}
        </Col>

        <Col>
          <Label htmlFor="email">Email:</Label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder="Digite o seu email"
          />
          {errors.email?.type === "required" && (<Alert>O Email é obrigatorio!</Alert>)}
        </Col>

        <Col>
          <Label htmlFor="cidade">Cidade:</Label>
          <select
            {...register("cidade", { required: true })}
            id="cidade"
          >
            {cidades.map(cidade => (
              <option key={cidade.id} value={cidade.nome}>
                {cidade.nome}
              </option>
            ))}
          </select>
          {errors.cidade?.type === "required" && (<Alert>A cidade é obrigatorio!</Alert>)}
        </Col>

        <Col>
          <Label htmlFor="mensagem">Mensagem:</Label>
          <textarea
            {...register("mensagem")}
            id="mensagem"
          />
        </Col>

        <Col>
          <Button type="submit">
            Enviar
          </Button>
        </Col>
      </FormStyle>
    </>
  )
}
