import { Injectable } from '@nestjs/common';
import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';

@Injectable()
export class GeoService {
  create(createGeoDto: CreateGeoDto) {
    return 'This action adds a new geo';
  }

  findAll() {
    const pontoInicial = {
      descricao: 'Marcação do primeiro ponto',
      posicao: [40.505, -100.09]
    }
    const pontoInicial2 = {
      descricao: 'Marcação do próximo ponto',
      posicao: [40.505, -103.09]
    }
    return [pontoInicial, pontoInicial2];
  }

  findOne(id: number) {
    return `This action returns a #${id} geo`;
  }

  update(id: number, updateGeoDto: UpdateGeoDto) {
    return `This action updates a #${id} geo`;
  }

  remove(id: number) {
    return `This action removes a #${id} geo`;
  }
}
