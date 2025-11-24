import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  putHello(): string {
    return 'Data actualizada';
  }

  postHello(): string {
    return 'Data creada';
  }
}
