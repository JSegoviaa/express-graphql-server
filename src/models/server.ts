import http from 'http';
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import cors from 'cors';
import users from '../routes/users';
import { typeDefs, resolvers } from '../apollo';

class Server {
  private httpServer: http.Server;
  private server: ApolloServer;
  private app: Application;
  private port: string;
  private api = {
    users: '/api/users',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.httpServer = http.createServer(this.app);
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });

    //Servidor graphql
    this.apolloServer();

    //middlewares
    this.middlewares();

    //Applications routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Body
    this.app.use(express.json());

    //Public folder
    this.app.use(express.static('src/public'));
  }

  //Apollo server method
  async apolloServer() {
    await this.server.start();

    this.server.applyMiddleware({ app: this.app });
  }

  //Aplication routes method
  routes() {
    this.app.use(this.api.users, users);
  }

  listen() {
    this.httpServer.listen(this.port, () => {
      console.log(`Server online on port: ${this.port}`);
    });
  }
}

export default Server;
