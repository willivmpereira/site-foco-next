import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import InfoHome from "../components/InfoHome";
import NextEvents from "../components/NextEvents";
import PastEvents from "../components/PastEvents";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Descomplica</title>
                <meta name="description" content="Descomplica" />
            </Head>
            <NavBar />
            <Header />
            <InfoHome />
            <NextEvents />
            <PastEvents />
            <Partners />
            <Footer />
        </>
    );
};

export default Home;
