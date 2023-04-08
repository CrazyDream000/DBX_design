import React from 'react';
import search from '../assest/img/Search.png';
import arrow from '../assest/img/arrow-up.png';
import arrowRight from '../assest/img/arrow-left.png';
import star from '../assest/img/Union.png';

function Pending (){
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
             <div class="block w-full mt-6 p-3 bg-white bg-opacity-100 mx-auto rounded-2xl overflow-y-hidden">
                <div class="h-auto">
                    <div class="flex">
                        <div class="text-left text-sm">
                            Transactions 
                            <span class="text-gray-300">/ Pending Transactions</span>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 xs:w-4/5 mt-pending mb-pendend text-left font-medium text-pending leading-pending text-gray-400">
                        There are no pending transactions.
                    </div>
                </div>
             </div>
        </div>
    )   
}

export default Pending;