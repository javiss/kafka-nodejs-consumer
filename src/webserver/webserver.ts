import express from 'express';
import * as http from 'http';
import {config} from '../env/environment';
import {logger} from '../service/logging';
import {ApiCorsService} from "../service/api-cors.service";
import socketio from 'socket.io';
import sockets from '../service/sockets.service';

export class WebServerService {
    server!: http.Server;
    app!: express.Express;

    constructor() {
    }

    start() {
        this.app = express();

        new ApiCorsService(this.app);

        this.server = this.app.listen(config.port, () => {
            logger.warn(`environment loaded: ${config.env}`);
            logger.info(`server started at http://localhost:${config.port}`);
        });

        sockets(socketio(this.server));

        return this.server;
    }
}
