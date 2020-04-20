import { Express } from 'express';
import cors from 'cors';

export class ApiCorsService {
  constructor(app: Express) {
    app.use(cors());
  }
}
