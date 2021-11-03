import { config } from "../Config/Constants";
import { Request, Response } from "express";
import shortId from 'shortid';

export class UrlController {

    public async shorten(request: Request, response: Response): Promise<void> {
        const { originUrl } = request.body;
        const hash = shortId.generate()
        const shortUrl = `${config.API_URL}/${hash}`;


        response.status(200).json({ originUrl, hash, shortUrl });
    }

    public async redirect(request: Request, response: Response): Promise<void> {
        const { hash } = request.params;
        const url = {
            originUrl: "https://cloud.mongodb.com/v2/6182965d93f5dd1d52491789#clusters?fastPoll=true",
            hash: '6bd_jkUVx',
            shortUrl: 'http://localhost:3000//6bd_jkUVx'
        }

        response.redirect(url.originUrl);
    }
}