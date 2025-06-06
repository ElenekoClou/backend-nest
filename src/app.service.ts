import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo owo';
  }

  getHelloEspanol(): string {
    return 'Hola mundo ewe';
  }

}
