import { config } from '../Config/Constants';
import mongoose from 'mongoose';

export class MongoConnection {

    public async connect() {
        try {
            await mongoose.connect(config.MONGO_CONNECTION);
            console.log('Database connected')
            
        } catch (error: any) {
            console.log(error.message)
            process.exit(1);
        }
    }
}