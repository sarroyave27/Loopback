import {Entity, model, property} from '@loopback/repository';

@model()
export class Categoria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;


  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;
