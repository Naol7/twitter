import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schema/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({
  timestamps: true,
}
)
export class Comment {
  @Prop()
  text: string;

  @Prop()
  likes: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
  user: User;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Comment'})
  parent: Comment | null;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);
