import { Router } from 'express';
import { UrlController } from './Controllers/UrlController';

const routes = Router();
const urlController = new UrlController();

routes.post('/shorten', urlController.shorten);
routes.get('/:hash', urlController.redirect);

export {routes};