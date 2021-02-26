import { Module } from '@nestjs/common';
import { CbfModule } from './cbf/cbf.module';

@Module({
  imports: [CbfModule],
})
export class AppModule {}
