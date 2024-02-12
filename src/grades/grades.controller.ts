import { Body, Controller, Get, Inject, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GradesDTO } from 'src/DTO/grades.dto';

@Controller('grades')
export class GradesController {
  constructor(
    @Inject('GRADES_SERVICE') private GradesClient: ClientProxy
  ) {}


  @Get('/statistic/:personalCode')
  async getStudentStatistic(@Param('personalCode') personalCode: string) {
  let result: any
  await this.GradesClient.send('getStudentStatistic', personalCode).forEach((val) => {result = val})
  if (!result) {
    throw new NotFoundException({message: "ERR_ENTITY_NOT_FOUND"})
  }
  return result
  }



  @Get(':pages')
   getGrades(@Param('pages') pages: string) {
    const offset = pages.split('-')[0]
    const limit = pages.split('-')[1]
    const pagination = {
      offset: Number(offset),
      limit: Number(limit)
    }
   return this.GradesClient.send('getGrades', pagination)
  }




  @Post(':personalCode')
  async rateStudent(@Param('personalCode') personalCode: string, @Body() body: GradesDTO) {
    const payload = {
      personalCode: personalCode,
      body: body
    }
  let result: any
  await this.GradesClient.send('rateStudent', payload).forEach((val) => {result = val})
  if (!result) {
    throw new NotFoundException({message: "ERR_ENTITY_NOT_FOUND"})
  }
  return result
  }



}
