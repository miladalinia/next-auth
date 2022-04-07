import NextAuth from 'next-auth';
import {connectToDb} from 'utils/database/mongo-db';
import {passwordCheck} from 'utils/tools';
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            authorize: async (credentials) => {
                const mongo = await connectToDb();

                //user check
                const user = await mongo.db().collection('users').findOne({
                    email: credentials.email
                });
                if (!user) {
                    await mongo.close();
                    throw new Error('Not a valid user');
                }

//check password
                const validPass = await passwordCheck(credentials.password, user.password);
                if (!validPass) {
                    await mongo.close();
                    throw new Error('Wrong password');
                }

                await mongo.close();
                return {email: user.email}

            }
        })
    ]
})