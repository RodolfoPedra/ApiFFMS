import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { authDados } from '../../utils/authCBF';

@Injectable()
export class CbfService {
  alteracoesJogos() {
    return Axios.get(`${authDados.baseUrl}AlteracoesJogos`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  campeonatos() {
    return Axios.get(`${authDados.baseUrl}Campeonatos`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  jogosPorCampeonatoFase(idFase: number) {
    return Axios.get(`${authDados.baseUrl}JogosPorCampeonatoFase/${idFase}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  campeonatosFases() {
    return Axios.get(`${authDados.baseUrl}CampeonatosFases`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  jogo(id_jogo: number) {
    return Axios.get(`${authDados.baseUrl}Jogo/${id_jogo}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  arbitrosEscaladosJogo(id_jogo: number) {
    return Axios.get(`${authDados.baseUrl}ArbitrosEscaladosJogo/${id_jogo}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  alteracoesJogo(id_jogo: number) {
    return Axios.get(`${authDados.baseUrl}AlteracoesJogo/${id_jogo}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  classificacaoCampeonatoFase(idFase: number) {
    return Axios.get(
      `${authDados.baseUrl}ClassificacaoCampeonatoFase/${idFase}`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Basic ${authDados.auth}`,
        },
      },
    ).then((json) => json.data);
  }

  campeonatoGrupos(idFase: number) {
    return Axios.get(`${authDados.baseUrl}CampeonatoGrupos/${idFase}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }

  classificacaoCampeonatoGrupo(idFase: number, idGrupo: number) {
    return Axios.get(
      `${authDados.baseUrl}ClassificacaoCampeonatoGrupo/${idFase}/${idGrupo}`,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Basic ${authDados.auth}`,
        },
      },
    ).then((json) => json.data);
  }

  jogos() {
    return Axios.get(`${authDados.baseUrl}Jogos`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);
  }
}
