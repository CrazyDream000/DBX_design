import React from 'react';
import search from '../assest/img/Search.png';
import arrow from '../assest/img/arrow-up.png';
import arrowRight from '../assest/img/arrow-left.png';
import star from '../assest/img/Union.png';

function Transaction (){
    return (
        <div class="block w-full custom:w-show h-auto  border-slate-100 border-opacity-50 bg-white bg-opacity-25 mx-auto py-6 px-6 rounded-2xl shadow-lg">
             <div class="flex w-full h-head p-content bg-white bg-opacity-100 mx-auto rounded-2xl">
                <div class="my-auto text-left w-1/2">
                    Transactions
                </div>
                <div class="flex justify-end my-auto w-1/2 h-full">
                    <div class="place-content-center flex">
                        <img class="w-6 h-6 place-self-center" src={arrow}/>
                        <div class="text-xs text-gray-400 place-self-center">1 / 5</div>
                        <img class="w-6 h-6 place-self-center rotate-180" src={arrow}/>
                    </div>
                </div>
             </div>
             <div class="block w-full h-main mt-6 p-3 bg-white bg-opacity-100 mx-auto rounded-2xl overflow-y-hidden">
                <div class="h-auto">
                    <div class="flex">
                        <div class="text-left text-sm w-1/2">Validated Transactions </div>
                        <div class="text-xs w-1/2">
                            <div class="flex float-right">
                                View all transactions
                                <img class="w-2.5 h-2.5 place-self-center" src={arrowRight}/>
                            </div>
                        </div>
                    </div>
                    <div class="h-item py-2.5 pr-3 p-4 w-full flex">
                            <div class="w-header flex-none bg-gray-100 border-gray-300 rounded-lg inline-block float-left h-full">
                                <div className='flex w-full h-full'>
                                    <div class="place-self-center m-auto">
                                        <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                        <div class="font-medium text-xs">Contract cell</div>
                                        <div class="font-light text-xs">Success</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-3 font-sans flex-column w-set text-left py-1">
                                <div class="flex font-normal text-xs h-1/3">
                                    <div class="my-auto overflow-hidden whitespace-nowrap text-ellipsis  text-purple-950 ">0x5666b099d4659ba081c5de23b36e8755612592b078affd60a2d5b7fa9e08892a</div> 
                                </div>
                                <div class="flex font-normal text-xs h-1/3">
                                    <div class="my-auto overflow-hidden whitespace-nowrap text-ellipsis  text-purple-950 ">0x067169F85A2229e477DFDf15CF0db7a0a1b3a20D → DBX_USD (0x91efa3–5e6143)</div>
                                </div>
                                <div class="flex font-normal text-xs h-1/3 ">
                                    <div class="my-auto overflow-hidden whitespace-nowrap text-ellipsis">0 DBX <span class="text-gray-300  overflow-hidden">0.022035 TX Fee</span></div>
                                </div>
                            </div>
                            <div class="w-header  flex-none text-right py-3 inline-block float-right">
                                <div class="flex font-medium text-xs h-1/3">
                                    <div class="my-auto ml-auto text-purple-950 underline">Block #29801457</div>
                                </div>
                                <div class="flex font-normal text-xs h-1/3 mt-3">
                                    <div class="my-auto ml-auto">12 days ago</div>
                                    </div>
                            </div>
                        </div>
                </div>
             </div>
             <div class="flex w-full h-head mt-6 bg-white bg-opacity-100 mx-auto rounded-2xl">
                <div class="w-full place-content-center flex">
                    <img class="w-6 h-6 place-self-center" src={arrow}/>
                    <div class="text-xs text-gray-400 place-self-center">1 / 5</div>
                    <img class="w-6 h-6 place-self-center rotate-180" src={arrow}/>
                </div>
             </div>
        </div>
    )
}

export default Transaction;