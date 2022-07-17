import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

export const csrfProtection = csurf({
  cookie: {
    secure: true,
    maxAge: 3600,
    httpOnly: true,
    sameSite: 'strict'
  },
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(3000);
}

bootstrap();
