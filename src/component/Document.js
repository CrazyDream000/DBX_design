import React from 'react';
import search from '../assest/img/Search.png';
import arrow from '../assest/img/arrow-up.png';
import arrowRight from '../assest/img/arrow-left.png';
import star from '../assest/img/Union.png';

function Document (){

    const setAccountsAPI = () => {
        let content = [];
        for(var i = 0 ; i < 7 ; i ++)   {
            content.push((<div class="mb-6 text-left text-sm"> 
                Account <span class="ml-9 bg-blue-900 text-white text-xs px-5 py-1"> ?module=account  </span>
            </div>));
        }
        return content;
    };

    return (
        <div class="block w-show h-auto border-slate-100 border-opacity-50 bg-white bg-opacity-25 mx-auto py-6 px-6 rounded-2xl shadow-lg">
             <div class="flex w-full h-head p-content bg-white bg-opacity-100 mx-auto rounded-2xl">
                <div class="my-auto text-left w-1/2">
                    API Documentation
                </div>
                <div class="flex my-auto text-left w-1/2 h-full">
                    <div class="flex w-4/5 text-left h-full bg-slate-0 rounded-lg px-2.5">
                        {/* <img class="w-4 h-4 place-self-center" src={search}/>
                        <div class="mx-2.5 text-xs text-gray-400 place-self-center">Search by address, token symbol, name, transaction</div> */}
                    </div>
                    <div class="w-1/5 place-content-center flex">
                        <img class="w-6 h-6 place-self-center" src={arrow}/>
                        <div class="text-xs text-gray-400 place-self-center">1 / 5</div>
                        <img class="w-6 h-6 place-self-center rotate-180" src={arrow}/>
                    </div>
                </div>
             </div>
             <div class="block w-full h-main mt-3 bg-white bg-opacity-100 mx-auto rounded-2xl overflow-y-hidden mb-3">
                <div class="h-auto w-full px-3">
                    <div class="text-left text-sm w-1/2 pt-5 py-2">API Documentation</div>
                    <div class="text-left text-sm w-full text-blue-800 pl-10"> [ Base URL: https://localhost:80/api ] </div>
                    <div class="text-left text-sm w-full text-gray-400 my-8"> This API is provided for developers transitioning their applications from Etherscan to BlockScout. 
                                                                            It supports GET and POST requests. </div>  
                </div>
                <div class="w-full pt-8 pb-6 bg-gray-100 px-3.5 grid grid-rows-3 grid-flow-col ">
                    {setAccountsAPI()}
                </div>
             </div>
             <div class="flex flex-col w-full px-4 py-4 bg-white text-black rounded-2xl overflow-hidden mx-auto">
                <div class="mb-7 text-left text-sm"> 
                    Account <span class="ml-9 bg-blue-900 text-white text-xs px-5 py-1"> ?module=account  </span>
                </div>
                <div class="flex justify-between items-start">
                    <div class="text-sm">Mimics Ethereum JSON RPC's eth_getBalance. Returns the balance as of the provided block (defaults to latest)</div>
                    <div class="flex mb-1">
                        <button class="bg-green-200 text-green-300 text-sxs rounded-3xl px-2 py-0.5 mr-3"> GET </button>
                        <button class="text-white text-sxs bg-gradient-to-tl bg-purple-400 rounded-3xl px-2 py-0.5"> POST </button>
                    </div>
                </div>
                <div class="text-xs text-gray-400 text-left"> eth_getBalance </div>
                <div class="text-xs text-gray-400 w-full text-right"> More Details - </div>
             </div>
        </div>
    )
}

export default Document;