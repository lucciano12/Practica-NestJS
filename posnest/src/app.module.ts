import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService], // Exportamos AppService para que pueda ser utilizado en otros módulos
})
export class AppModule {}
