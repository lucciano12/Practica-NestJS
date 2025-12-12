import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Hacemos que ConfigModule sea global
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      // Hacemos que TypeOrmModule use configuración asíncrona
      useFactory: typeOrmConfig,
    }),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService], // Exportamos AppService para que pueda ser utilizado en otros módulos
})
export class AppModule {}
