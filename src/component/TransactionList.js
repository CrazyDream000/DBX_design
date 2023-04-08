import icon1 from '../assest/img/icon-1.png';
import img16 from '../assest/img/img16.png';
import arrow from '../assest/img/arrow-right.png';
import next_arrow from '../assest/img/arrow-up.png';
import logo from '../assest/img/Logo.png'
import logo1 from '../assest/img/Logo1.png'
import star from '../assest/img/Union.png'
import bitcoin from '../assest/img/BIcon.png'
import collection from '../assest/img/collection.png'
import BNB from '../assest/img/BNB.png'
import React, { Component }  from 'react';

  
function TransactionList() {

    return (
        <section className="dashboard-container flex flex-col items-center justify-center rounded-2xl">
            {/* layout5 */}
            <div className='dashboard-content w-content p-6 mt-6'>
                <div class="col-span-1 div-content p-4">
                    <div className='pl-5 h-10'><div className='inline-block float-left text-xl font-bold'>Blocks</div><div className='inline-block float-right'><div className='mt-2 flex flex-row justify-center items-center self-center'><img className=' ml-1' src={next_arrow}></img><div className=' text-xs font-bold text-gray-400'> 1 / 5 </div> <img className='-rotate-180 ml-1' src={next_arrow}></img></div></div></div>   
                </div>
                <div class="col-span-1 div-content p-4 mt-2">
                    <div className='flex flex-col'>
                        <div class="p-2 w-full h-full lg:h-item border-b-2 border-gray-100 border-solid">
                            <div class=" bg-gray-100 border-gray-300 p-2 rounded-lg  float-left h-full w-24 hidden md:inline-block lg:w-header">
                                <div className='flex h-full'>
                                    <div class="place-self-center m-auto">
                                        <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                        <div class="font-medium text-xs">#31638868</div>
                                        <div class="font-light text-xs">Block</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-3 font-sans text-left py-3 inline-block float-left h-full">
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">0 transactions <span className='text-sm text-gray-400 font-bold'>610 bytes</span></div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">Miner 0x00000000...</div>
                                </div>
                            </div>
                            <div class="w-header text-right inline-block float-right h-full">
                                <div class="flex font-medium text-xs h-1/2">
                                    <div class="my-auto ml-auto text-white underline bg-purple-950 p-2 decoration-transparent">12,000,000 Gas Limit</div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto ml-auto font-bold">0 (0%) Gas Used</div>
                                </div>
                            </div>
                        </div>  

                        <div class="p-2 w-full h-full lg:h-item border-b-2 border-gray-100 border-solid">
                            <div class=" bg-gray-100 border-gray-300 p-2 rounded-lg float-left h-full w-24 hidden md:inline-block lg:w-header">
                                <div className='flex h-full'>
                                    <div class="place-self-center m-auto">
                                        <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                        <div class="font-medium text-xs">#31638868</div>
                                        <div class="font-light text-xs">Block</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-3 font-sans text-left py-3 inline-block float-left h-full">
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">0 transactions <span className='text-sm text-gray-400 font-bold'>610 bytes</span></div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">Miner 0x00000000...</div>
                                </div>
                            </div>
                            <div class="w-header text-right inline-block float-right h-full">
                                <div class="flex font-medium text-xs h-1/2">
                                    <div class="my-auto ml-auto text-white underline bg-purple-950 p-2 decoration-transparent">12,000,000 Gas Limit</div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto ml-auto font-bold">0 (0%) Gas Used</div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 w-full h-full lg:h-item border-b-2 border-gray-100 border-solid">
                            <div class=" bg-gray-100 border-gray-300 p-2 rounded-lg float-left h-full w-24 hidden md:inline-block lg:w-header">
                                <div className='flex h-full'>
                                    <div class="place-self-center m-auto">
                                        <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                        <div class="font-medium text-xs">#31638868</div>
                                        <div class="font-light text-xs">Block</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-3 font-sans text-left py-3 inline-block float-left h-full">
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">0 transactions <span className='text-sm text-gray-400 font-bold'>610 bytes</span></div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">Miner 0x00000000...</div>
                                </div>
                            </div>
                            <div class="w-header text-right inline-block float-right h-full">
                                <div class="flex font-medium text-xs h-1/2">
                                    <div class="my-auto ml-auto text-white underline bg-purple-950 p-2 decoration-transparent">12,000,000 Gas Limit</div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto ml-auto font-bold">0 (0%) Gas Used</div>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 w-full h-full lg:h-item border-b-2 border-gray-100 border-solid">
                            <div class=" bg-gray-100 border-gray-300 p-2 rounded-lg float-left h-full w-24 hidden md:inline-block lg:w-header">
                                <div className='flex h-full'>
                                    <div class="place-self-center m-auto">
                                        <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                        <div class="font-medium text-xs">#31638868</div>
                                        <div class="font-light text-xs">Block</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ml-3 font-sans text-left py-3 inline-block float-left h-full">
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">0 transactions <span className='text-sm text-gray-400 font-bold'>610 bytes</span></div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto text-purple-950">Miner 0x00000000...</div>
                                </div>
                            </div>
                            <div class="w-header text-right inline-block float-right h-full">
                                <div class="flex font-medium text-xs h-1/2">
                                    <div class="my-auto ml-auto text-white underline bg-purple-950 p-2 decoration-transparent">12,000,000 Gas Limit</div>
                                </div>
                                <div class="flex font-normal text-xs h-1/2">
                                    <div class="my-auto ml-auto font-bold">0 (0%) Gas Used</div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="col-span-1 div-content p-4 mt-2">
                    <div className='pl-5 h-10 flex flex-row justify-center items-center'><div className='mt-2 flex flex-row justify-center items-center self-center'><img className=' ml-1' src={next_arrow}></img><div className=' text-xs font-bold text-gray-400'> 1 / 5 </div> <img className='-rotate-180 ml-1' src={next_arrow}></img></div></div>   
                </div>
            </div>
        </section>
    );
}

export default TransactionList;