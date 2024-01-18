import React from "react";
import { useState } from "react";
import * as S from "./Menu.styles";

function Menu() {
  const [burger, setBurger] = useState(false);
  function burgerClick() {
    setBurger(!burger);
  }
  return (
    <S.Wrapper>
      <S.Main>
        <S.MainNav>
          <S.NavLogo>
            <S.LogoImage src="img/logo.png" alt="logo" />
          </S.NavLogo>
          {/*click*/}
          <S.NavBurger onClick={burgerClick}>
            <S.BurgerLine></S.BurgerLine>
            <S.BurgerLine></S.BurgerLine>
            <S.BurgerLine></S.BurgerLine>
          </S.NavBurger>
          {/*состояние*/}
          {burger && <NavMenu />}
        </S.MainNav>
      </S.Main>
    </S.Wrapper>
  );
}
export default Menu;

function NavMenu() {
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/signin">Войти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}
