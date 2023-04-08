import icon1 from '../assest/img/icon-1.png';
import img16 from '../assest/img/img16.png';
import arrow from '../assest/img/arrow-right.png';
import next_arrow from '../assest/img/arrow-up.png';
import logo from '../assest/img/Logo.png'
import logo1 from '../assest/img/Logo1.png'
import star from '../assest/img/Union.png'
import bitcoin from '../assest/img/BIcon.png'
import collection from '../assest/img/collection.png'
import qrCode from '../assest/img/qrCode.png'
import BNB from '../assest/img/BNB.png'
import React, { Component }  from 'react';

  
function AddressDetail() {

    return (
        <section className="dashboard-container flex flex-col items-center justify-center rounded-2xl">
            {/* layout5 */}
            <div className='dashboard-content w-content p-6 mt-6'>
                <div class="col-span-1 div-content p-4">
                    <div className='text-left text-xl font-bold'>Address Details</div>
                    <table className='mt-4 w-full'>
                        <thead>
                            
                        </thead>
                        <tbody>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Address:</span></td>
                                <td className='text-left'><div class=" w-36 overflow-hidden whitespace-nowrap text-ellipsis sm:w-full">0x0000000000000000000000000000000000000000</div></td>
                            </tr>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Balance:</span></td>
                                <td className='text-left'><div class=" w-36 overflow-hidden whitespace-nowrap text-ellipsis sm:w-full">0.000000000000000001 DBX</div></td>
                            </tr>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Tokens:</span></td>
                                <td className='text-left'>0 Tokens</td>
                            </tr>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Transactions:</span></td>
                                <td className='text-left text-gray-400'>Fetching Transactions...</td>
                            </tr>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Transfers:</span></td>
                                <td className='text-left text-gray-400'>Fetching Transactions...</td>
                            </tr>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Gas Used:</span></td>
                                <td className='text-left text-gray-400'>Fetching Transactions...</td>
                            </tr>
                            <tr className=' border-b-2 border-gray-100 border-solid h-12'>
                                <td className='flex flex-row w-36 justify-start items-center h-12'><div className='w-4 h-4 rounded-full bg-gray-400 text-white text-xs'>i</div> <span className='text-gray-400 text-sm font-bold ml-1'>Balance Update:</span></td>
                                <td className='text-left'>31639638</td>
                            </tr>
                        </tbody>
                    </table>   
                    <button className='text-sm text-white w-28 h-10 bg-purple-900 flex justify-center items-center mt-4 rounded-md'><img src={qrCode}></img> QR Code</button>
                </div>
                
                <div class="col-span-1 div-content p-4 mt-2">
                <div className='text-left text-xs font-bold text-gray-400'><span className='text-black'>Transactions </span>/ Token Transactions / Internal Transactions / Coin Balance History / Blocks Validated</div>
                    <div className='text-6xl  mt-8 font-bold text-gray-400 w-full text-center sm:w-1/2 sm:text-left '>
                    There are no transactions for this address.
                    </div>   
                </div>
            </div>
        </section>
    );
}

export default AddressDetail;