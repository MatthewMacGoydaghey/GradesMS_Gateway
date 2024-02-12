import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([{
    name: 'STUDENTS_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://fzxkocmz:B0ihang6Z6_lxMwy8-kZFsyfXVKLKkrN@jackal.rmq.cloudamqp.com/fzxkocmz'],
      queue: 'students_queue',
      queueOptions: {
        durable: false
      },
  }}])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
