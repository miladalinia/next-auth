import {MongoClient} from "mongodb";

export async function connectToDb() {
    const dbClient = await MongoClient.connect('mongodb://localhost:27017/test');
    return dbClient;
}
