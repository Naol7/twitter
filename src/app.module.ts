import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CommentsModule,
     MongooseModule.forRoot('mongodb+srv://threads-user:ucI5nthK0ZpjwucW@cluster0.jxae3.mongodb.net/threadsDB?retryWrites=true&w=majority&appName=Cluster0')],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
