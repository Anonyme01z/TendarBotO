import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>{`
                    body {
                        display: flex;
                        flex-direction : column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        color: white;
                        background-color: #000000;
                        font-family: Arial, sans-serif;
                    }

                    .center-div {
                        width: 50vw;
                        height: 80vh;
                        background-color: rgb(102, 71, 255);
                        border-radius: 15px;
                        padding: 5px;
                        box-sizing: border-box;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }

                    @media only screen and (max-width: 600px) {
                        .center-div {
                            height: 40vh;
                            width: 80vw;
                        }
                    }
                `}</style>
            </Head>
            <div>
                <header>
                    <h2>This Is A Website To Host Bots</h2>
                </header>
                <div>
                    <p style={{ textAlign: 'center' }}>Chatbot <span></span></p>
                    <div>
                        <div className="center-div">
                            <iframe
                                srcDoc={`<script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
                                <script src="https://mediafiles.botpress.cloud/3424ca88-3f33-4215-8e6d-c49972ff78c9/webchat/v2.1/config.js"></script>`}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}