import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({ hello: 'world' });
  }
}
