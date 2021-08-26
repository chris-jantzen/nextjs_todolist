import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : '.development.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      retryAttempts: Number.MAX_VALUE,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    TodoModule,
    HealthcheckModule,
  ],
})
export class AppModule {}
