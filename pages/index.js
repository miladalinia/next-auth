import {useSession} from "next-auth/react";

const Home = () => {
    const {data: session, status} = useSession()
    console.log(session, status)

    return (
        <div className="container">
            <h1>
                Home
            </h1>
            {
                session && status === "authenticated" && (
                    <>
                        user logged in
                    </>
                )
            }
        </div>
    )
}

export default Home;
