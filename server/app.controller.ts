import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/form')
  getForm(@Req() req: Request) {
    return { csrfToken: req.csrfToken() };
  }

  @Post('/update-form')
  updateForm(@Req() request: Request): any {
    return request.body;
  }
}
