import { FormStyle } from "./style"

export const Form = () => {
  return (
    <>
      <FormStyle>
        <h1>Preencha seus dados</h1>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="city">Cidade:</label>
          <select id="city" name="city">
            <option value="city1">Cidade 1</option>
            <option value="city2">Cidade 2</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </FormStyle>
    </>
  )
}