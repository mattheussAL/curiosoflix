import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Err = () => (
  <div>Erro: 404</div>
)


ReactDOM.render(
  <BrowserRouter>
  {/* Switch faz a identificação da URL */}
    <Switch>
      {/* Rotas */}
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Err} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
