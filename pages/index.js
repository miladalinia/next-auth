import {useSession} from "next-auth/react";

export default function Home() {
    const {data: session, status} = useSession()
    console.log(session)

    return (
        <div className="container">
            <h1>
                Home
            </h1>
        </div>
    )
}
