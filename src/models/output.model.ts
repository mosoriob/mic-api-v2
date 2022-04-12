import {Entity, model, property} from '@loopback/repository';

@model()
export class Output extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  display_name?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  match?: string;


  constructor(data?: Partial<Output>) {
    super(data);
  }
}

export interface OutputRelations {
  // describe navigational properties here
}

export type OutputWithRelations = Output & OutputRelations;
