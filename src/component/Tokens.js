import React from 'react';
import search from '../assest/img/Search.png';
import arrow from '../assest/img/arrow-up.png';
import arrowRight from '../assest/img/arrow-left.png';
import star from '../assest/img/Union.png';

export default function Tokens (){

    return (

        <div class="block w-full custom:w-show h-auto  border-slate-100 border-opacity-50 bg-white bg-opacity-25 mx-auto py-6 px-6 rounded-2xl shadow-lg">
             <div class="flex flex-row w-full h-head p-content bg-white bg-opacity-100 mx-auto rounded-2xl">
                <div class="my-auto font-bold text-left w-1/6 md:w-1/3 lg:w-1/2">Tokens</div>
                <div class="flex my-auto text-left w-5/6 md:w-2/3 lg:w-1/2 h-full float-right">
                    <div class="flex w-4/5 text-left h-full bg-slate-200 rounded-lg px-2.5">
                        <img class="w-4 h-4 place-self-center" src={search}/>
                        <div class="w-full mx-2.5 text-xs text-gray-400 place-self-center">
                            <input class=" w-full outline-none text-xs bg-slate-200" placeholder="Search by address, token symbol, name, transaction"></input>
                        </div>
                    </div>
                    <div class="w-1/5 place-content-center flex">
                        <img class="w-6 h-6 place-self-center" src={arrow}/>
                        <div class="text-xs text-gray-400 place-self-center">1 / 5</div>
                        <img class="w-6 h-6 place-self-center rotate-180" src={arrow}/>
                    </div>
                </div>
             </div>
             <div class="block w-full h-main mt-6 p-4 bg-white bg-opacity-100 mx-auto rounded-2xl overflow-y-hidden">
                <div class="text-xs font-semibold my-auto mt-4 text-left w-1/2">
                    Tokens
                    <span class="text-gray-200">
                         / All
                    </span>
                </div>
                <div class="h-auto mt-8">
                    <div class="border-slate-100 rounded-lg">
                        <table class="border-collapse border text-left border-slate-100 w-full font-sans">
                            <tr class="h-10 rounded-lg text-sm">
                                <th class="bg-slate-100 px-3 font-medium">Token</th>
                                <th class="bg-slate-100 font-medium">Address</th>
                                <th class="bg-slate-100 font-medium">Total Supply</th>
                                <th class="bg-slate-100 font-medium">Holders Count</th>
                            </tr>
                            <tr class="h-10 text-xs">
                                <td class="hover:bg-slate-100 px-3 text-blue-400 font-medium">DBX USD(xUS)</td>
                                <td class="hover:bg-slate-100 text-purple-950 font-medium">
                                    <div class="overflow-x-hidden w-text md:w-full">0x91efa3FC448b7FCD40880F3ef650eB99635e6143</div>
                                </td>
                                <td class="hover:bg-slate-100 font-medium">1,760,000 xUS</td>
                                <td class="hover:bg-slate-100 font-medium">8</td>
                            </tr>
                        </table>
                    </div>
                </div>
             </div>
        </div>
    )
}