import { Controller, Get, Param } from '@nestjs/common';
import { CbfService } from './shared/cbf.service';

@Controller('cbf')
export class CbfController {
  constructor(private CbfService: CbfService) {}

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
