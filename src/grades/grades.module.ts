import { Module } from '@nestjs/common';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([{
    name: 'GRADES_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://fzxkocmz:B0ihang6Z6_lxMwy8-kZFsyfXVKLKkrN@jackal.rmq.cloudamqp.com/fzxkocmz'],
      queue: 'grades_queue',
      queueOptions: {
        durable: false
      },
  }}])],
  controllers: [GradesController],
  providers: [GradesService]
})
export class GradesModule {}
