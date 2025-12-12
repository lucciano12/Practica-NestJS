import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'El nombre de la categoria no puede ir vacio' })
  @ApiProperty({ example: 'Bebidas', description: 'Nombre de la categoria' })
  name: string;

  @IsNotEmpty({ message: 'La descripcion de la categoria no puede ir vacia' })
  @ApiProperty({
    example: 'Categoria para bebidas frias y calientes',
    description: 'Descripcion de la categoria',
  })
  description: string;
}
