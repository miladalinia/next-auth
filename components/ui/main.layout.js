import Navigation from '../navigation/nav';
import Head from "next/head";

const MainLayout = (props) => {
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <header>
                <Navigation/>
            </header>
            <div className="container main_wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout;