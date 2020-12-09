import { Module } from '@nestjs/common';
import { CbfController } from './cbf.controller';
import { CbfService } from './shared/cbf.service';

@Module({
  controllers: [CbfController],
  providers: [CbfService]
})
export class CbfModule {}
