import {Entity, model, property} from '@loopback/repository';

@model()
export class FacturaProducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idfacprod?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;


  constructor(data?: Partial<FacturaProducto>) {
    super(data);
  }
}

export interface FacturaProductoRelations {
  // describe navigational properties here
}

export type FacturaProductoWithRelations = FacturaProducto & FacturaProductoRelations;
