// @ts-ignore
import Logplease from 'logplease';

export class LoggerService {

    private log: any;

    constructor() {
        this.log = Logplease.create('')
    }

    info(msg: any) {
        this.log.info(msg);
    }

    warn(msg: any) {
        this.log.warn(msg);
    }

    error(msg: any) {
        this.log.error(msg);
    }
}
