import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTeste(id: string): string {
    return `teste nest param ${id}`
  }
}