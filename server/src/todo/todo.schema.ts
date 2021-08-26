import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ collection: 'todo', timestamps: true })
export class Todo {
  @Prop({ required: true, type: String })
  body: string;

  @Prop({ required: true, type: Boolean, default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
