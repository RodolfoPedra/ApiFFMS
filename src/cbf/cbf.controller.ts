import { Controller, Get, Param } from '@nestjs/common';
import Axios from 'axios';
import { CbfService } from './shared/cbf.service';
import {authDados} from '../utils/authCBF';


const sub17 =  [{
  "codigo_campeonato": 431,
  "CodigoFederacao": 5,
  "Campeonato_Nome": "Sul-Mato-Grossense Sub 17\t",
  "Ordem": 4,
  "exercicio": 2020,
  "Codigo_Fase": 135
}];

@Controller('cbf')
export class CbfController {
  constructor(private CbfService: CbfService) {}

  @Get('CampeonatosExercicio/:exercicio')
  async campeonatos(@Param('exercicio') exercicio: number) {
    const _campeonatoAno = await Axios.get(`${authDados.baseUrl}CampeonatosFases`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);

    const _campeonato = await Axios.get(`${authDados.baseUrl}Campeonatos`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${authDados.auth}`,
      },
    }).then((json) => json.data);

    const _newCampeonatoAno = _campeonatoAno.reduce((acc, item, index) => {
        const newCampeonato = _campeonato.find((v) => v.codigo_campeonato == item.codigo_campeonato)
        const ca = Object.assign(item, {Campeonato_Nome: newCampeonato.Campeonato_Nome});
        return [...acc, (acc[index] = ca)];
    },[])

    const newCampeonato = _newCampeonatoAno.concat(sub17).filter((v) => v.Codigo_Fase == 135 && v.exercicio == exercicio);
    
    return newCampeonato;
  }

  @Get('AlteracoesJogos')
  getAlteracoesJogos(): any {
    return this.CbfService.alteracoesJogos();
  }

  @Get('Campeonatos')
  getCampeonatos(): any {
    return this.CbfService.campeonatos();
  }

  @Get('JogosPorCampeonatoFase/:idFase')
  getJogosPorCampeonatoFase(@Param('idFase') idFase: number): any {
    return this.CbfService.jogosPorCampeonatoFase(idFase);
  }

  @Get('CampeonatosFases')
  getCampeonatosFases(): any {
    return this.CbfService.campeonatosFases();
  }

  @Get('Jogo/:id_jogo')
  getJogo(@Param('id_jogo') id_jogo: number): any {
    return this.CbfService.jogo(id_jogo);
  }

  @Get('Jogos')
  getJogos(): any {
    return this.CbfService.jogos();
  }

  @Get('ArbitrosEscaladosJogo/:id_jogo')
  getArbitrosEscaladosJogo(@Param('id_jogo') id_jogo: number): any {
    return this.CbfService.arbitrosEscaladosJogo(id_jogo);
  }

  @Get('AlteracoesJogo/:id_jogo')
  getAlteracoesJogo(@Param('id_jogo') id_jogo: number): any {
    return this.CbfService.alteracoesJogo(id_jogo);
  }

  @Get('ClassificacaoCampeonatoFase/:idFase')
  getClassificacaoCampeonatoFase(@Param('idFase') idFase: number): any {
    return this.CbfService.classificacaoCampeonatoFase(idFase);
  }

  @Get('CampeonatoGrupos/:idFase')
  getCampeonatoGrupos(@Param('idFase') idFase: number): any {
    return this.CbfService.campeonatoGrupos(idFase);
  }

  @Get('ClassificacaoCampeonatoGrupo/:idFase/:idGrupo')
  getClassificacaoCampeonatoGrupo(
    @Param('idFase') idFase: number,
    @Param('idGrupo') idGrupo: number,
  ): any {
    return this.CbfService.classificacaoCampeonatoGrupo(idFase, idGrupo);
  }
}
