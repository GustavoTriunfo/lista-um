import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OlaController } from './ola/ola.controller';
import { OlaService } from './ola/ola.service';

@Module({
  imports: [],
  controllers: [AppController, OlaController],
  providers: [AppService, OlaService],
})
export class AppModule {}
