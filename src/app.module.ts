import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CbfModule } from './cbf/cbf.module';

@Module({
  imports: [CbfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
