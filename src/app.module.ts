import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [StudentsModule, GradesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
