import RouteGuard from 'utils/guard/routeGuard'
import {getSession, useSession} from "next-auth/react";

const Dashboard = () => {
    console.log(useSession())

    return (
        // <RouteGuard>
        <>
            <h1>Dashboard</h1>
        </>
        // </RouteGuard>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession({req: context.req})

    if (!session) {
        return {
            redirect: {
                destination: '/sign_in',
                permanent: false
            }
        }
    }

    return {
        props: {ifNeeded: session}
    }

}

export default Dashboard;