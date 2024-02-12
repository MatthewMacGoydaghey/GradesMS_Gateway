import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { StudentsService } from './students.service';
import { StudentDTO } from 'src/DTO/student.dto';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly StudentsService: StudentsService,
    @Inject('STUDENTS_SERVICE') private StudentsClient: ClientProxy
  ) {}



  @Post()
  createStudent(@Body() body: StudentDTO) {
  return this.StudentsClient.send('createStudent', body)
  }


}
