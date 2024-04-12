import { useEffect, useState } from "react"
import { LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from "./style"
import { FaShoppingCart } from 'react-icons/fa'
import axios from "axios"

interface IDataMenu {
  id: number,
  categoria: string
}

export const Menu = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  const [dataMenu, setDataMenu] = useState<IDataMenu[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/categorias')
      .then(res => setDataMenu(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((value) => !value)
                }}
              >
                {extendNavbar ? <> &#10005; </> : <>&#8801;</>}
              </OpenLinksButton>
              <NavbarLinkExtended
                style={{
                  fontWeight: 'bold',
                  color: '#fff'
                }}
                to="/"
              >
                1Pitchau
              </NavbarLinkExtended>
              <NavbarLink to="/">Home</NavbarLink>
              {dataMenu.map((menu => {
                return (
                  <NavbarLink key={menu.id} to={`/categoria/${menu.id}`}>
                    {menu.categoria}
                  </NavbarLink>
                )
              }))}
              <NavbarLink to={"/sobre"}>
                Sobre
              </NavbarLink>
              <NavbarLink to={"/contatos"}>
                Contatos
              </NavbarLink>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkExtended to="/carrinho">
              <FaShoppingCart size={22} />
            </NavbarLinkExtended>
          </RightContainer>
        </NavbarInnerContainer>
        {
          extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtended to='/'>
                Home
              </NavbarLinkExtended>
              {dataMenu.map(menu => {
                return (
                  <NavbarLinkExtended key={menu.id} to={`/categoria/${menu.id}`}>
                    {menu.categoria}
                  </NavbarLinkExtended>
                )
              })}
              <NavbarLinkExtended to={"/sobre"}>
                Sobre
              </NavbarLinkExtended>
              <NavbarLinkExtended to={"/contatos"}>
                Contatos
              </NavbarLinkExtended>
            </NavbarExtendedContainer>
          )
        }
      </NavbarContainer>
    </>
  )
}
