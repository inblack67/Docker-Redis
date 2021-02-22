import express from 'express';
import Redis from 'ioredis';
import 'colors';

const main = async () => {
    const app = express();
    const redisClient = new Redis();


    await redisClient.set('hello', 'worlds');
    const res = await redisClient.get('hello');
    console.log(res);

    console.log(`Redis is here`.blue.bold);
    
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Server started on port ${ PORT }`.green.bold);
    });
};

main().catch(err => console.error(err));