import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schema/comment.schema';
import { Comment } from './schema/comment.schema';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])]
})
export class CommentsModule {}
