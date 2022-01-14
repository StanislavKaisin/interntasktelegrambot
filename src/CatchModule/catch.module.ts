import { Module } from '@nestjs/common';
import { CatchService } from './catch.service';

@Module({
  controllers: [],
  providers: [CatchService],
  imports: [],
  exports: [CatchService],
})
export class CatchModule {}
