import { config } from "../Config/Constants";
import { Request, Response } from "express";
import shortId from 'shortid';
import { UrlModel } from "../database/Models/Url";

export class UrlController {

    public async shorten(request: Request, response: Response): Promise<void> {
        const { originUrl } = request.body;

        const url = await UrlModel.findOne({originUrl});

        if(url){
            response.status(200).json(url);
            return;
        }

        const hash = shortId.generate()
        const shortUrl = `${config.API_URL}/${hash}`;
        const newUrl = await UrlModel.create({ hash, shortUrl, originUrl });

        response.status(200).json(newUrl);
        return;
    }

    public async redirect(request: Request, response: Response): Promise<void> {
        const { hash } = request.params;
        const url = await UrlModel.findOne({ hash });

        if(url){
            response.redirect(url.originUrl);
            return;
        }

        response.status(400).json({ error: 'Url nor found'});
        return;
    }
}