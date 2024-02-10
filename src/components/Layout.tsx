import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico"></link>
                <title>Poke-Next</title>
            </Head>
            <Navbar />
            <main className="main-container">{children}</main>
            <Footer />
        </>
    );
}
