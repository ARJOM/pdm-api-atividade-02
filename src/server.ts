import App from './app';
import DotEnv from 'dotenv';

DotEnv.config();

const { PORT } = process.env as any;

class Server {

    static start(){
        new App({ PORT });
    }
}

Server.start();