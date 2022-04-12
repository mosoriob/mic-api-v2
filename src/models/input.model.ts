import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Input extends Entity {
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
    required: true,
  })
  display_name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
  })
  path?: string;

  @property({
    type: 'string',
    required: true,
  })
  prefix: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Input>) {
    super(data);
  }
}

export interface InputRelations {
  // describe navigational properties here
}

export type InputWithRelations = Input & InputRelations;
