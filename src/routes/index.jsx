import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Importando o React Router Dom

import Login from '../pages/Login'
import Page404 from '../pages/Page404'
// Importando a pagina de login

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {/* 
          Informando o que vai ser renderizado no nosso / 
          que n o caso é a pagina inicial 

          Entao quando a gente quiser só a rota exata a gente coloca um exact

          Esse path ele vai checar se aquilo existe no endereço
          então qualque endereço louco depois da / funciona
        */}

      <Route path="*" component={Page404} />
      {/* qualquer rota que não exista vai para pagina 404 */}
    </Switch>
  )
  // Exportando as nossas rotas
}
