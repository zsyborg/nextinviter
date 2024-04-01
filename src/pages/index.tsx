import type { NextPage } from 'next';
import Head from 'next/head';

import GithubSvg from '../assets/GithubSvg';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
      <Head>
        <title>Next.js + Tailwind CSS + Telegram&apos;s Web App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet"></link> */}
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center tgback">
      {/*<div className="container-fluid flex-1">
             <div className="row d-flex flex-row justify-content-center">
                <div className="col-6 d-flex bg-slate-600">
                left
                </div>
                </div>
                </div> */}
        <div className='bg-fuchsia-950 p-8 rounded-2xl shadow-lg'>

      <div className="container-fluid">
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-1 d-flex">
                </div>
                <div className="col-6 text-center">
                    <h2 className='text-2xl text-white'>Welcome To Inviter TG App!</h2>
                    <br/>
                </div>
                <div className="col-1 d-flex">
                </div>
            </div>
        </div>









        <div className="container-fluid">
            <div className="row d-flex flex-row justify-content-center">
                
                <div className="col-12 text-center">
                    <h2 className='text-white mb-3'>Setup Your Profile</h2>
                    <div className="container-fluid">
                        <form>
                            <div className="mb-3 row">
                                
                                <div
                                    className="col-12"
                                >
                                    
                                    <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Twitter Handle Without @" />

                                    
                                    <br/>
                                    <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Telegram Profile Without @" />

                                    
                                    
                                    
                                    <br/>

                                    <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter Your SOL Wallet" />
                                    

                                </div>
                            </div>
                            
                            <div className="mb-3 row">
                                <div className="offset-sm-4 col-sm-8">
                                    <button type="submit" className="btn btn-primary text-black bg-indigo-400 px-4 py-2">
                                        Enter
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
              
            </div>
        </div>
      </div>
      </main>

      {/* <footer className="flex h-20 w-full items-center justify-center border-t border-t-telegram-black">
        <a
        className="flex items-center justify-center gap-2 text-telegram-black"
        href="https://github.com/mauriciobraz/next.js-telegram-webapp"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className="text-telegram-link">mauriciobraz/next.js-telegram-webapp</span>
          <GithubSvg className="h-6 w-6 fill-telegram-link" />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
