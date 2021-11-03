import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const api = express();

api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cors());

api.use(routes);

api.listen(3000, () => console.log('o servidor esta rodando'));