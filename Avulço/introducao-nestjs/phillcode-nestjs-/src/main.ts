import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { existsSync, unlinkSync } from 'fs';

async function bootstrap() {
  const dbFile = 'db.sqlite';
  if (existsSync(dbFile)) unlinkSync(dbFile); // Importamos essas duas fuções do fileSystem para verificar se o banco de dados existe e, se existir, excluí-lo cada vez que a aplicação reiniciar.

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
