import { webserver } from './webserver';
import {logger} from "./service/logging";

const server = webserver.start();

export { server };
