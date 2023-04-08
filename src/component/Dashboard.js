import icon1 from '../assest/img/icon-1.png';
import img16 from '../assest/img/img16.png';
import arrow from '../assest/img/arrow-right.png';
import logo from '../assest/img/Logo.png'
import logo1 from '../assest/img/Logo1.png'
import star from '../assest/img/Union.png'
import bitcoin from '../assest/img/BIcon.png'
import collection from '../assest/img/collection.png'
import BNB from '../assest/img/BNB.png'
import '../assest/css/Dashboard.css'
import AreaApexChart from './AreaApexChart';
import AreaApexChart1 from './AreaApexChart1';
import ColumnApexChart from './ColumnApexChart';
import React, { Component }  from 'react';

  
function Dashboard() {

    return (
        <section className="dashboard-container flex flex-col items-center justify-center rounded-2xl">
            {/* layout1 */}
            <div className='dashboard-content w-content grid gap-4 p-6 max-mn:grid-cols-2 grid-flow-row mn:grid-flow-col grid-rows-2'>
                <div class="row-span-2 col-span-2 div-content p-3">
                    <div className='bg-gray-100 rounded-md grid grid-cols-2'>
                        <div className='flex flex-row p-2'>
                            <img className="w-10 h-10" src={logo1}></img>
                            <div className='flex flex-col ml-2'>
                                <span className='text-sm font-bold'>DBX</span>
                                <span className='text-sm text-gray-400'>DBX</span>
                            </div>
                        </div>
                        <div className='flex flex-col ml-2 justify-center items-end p-2'>
                            <span className='text-xs font-bold text-green-400'>33.42% ^</span>
                            <span className='text-sm font-bold'>$0.00554<span className='text-xs text-gray-400'>/DBX</span></span>
                        </div>
                    </div>
                    <AreaApexChart/>
                </div>
                <div class="row-span-1 col-span-1 p-3 div-content">
                    <div className='flex flex-col justify-between h-full'>
                        <div className='icon-bg'><img src={icon1}></img></div>
                        <div className='order-last text-xs text-left'>
                            <div className='text-gray-400 '>Market Cap</div>
                            <div className='text-sm font-bold inline-block float-left'>$387,992.42</div>
                            <div className='text-xs text-green-400 font-bold text-right inline-block float-right align-baseline'>33.42% ^</div>
                        </div>
                    </div>
                </div>
                <div class="row-span-1 col-span-1 p-3 div-content">
                    <div className='flex flex-col  justify-between h-full'>
                        <div className='icon-bg'><img src={icon1}></img></div>
                        <div className='order-last text-xs text-left'>
                            <div className='text-gray-400 '>Circulation Supply</div>
                            <div className='text-sm font-bold inline-block float-left'>$387,992.42</div>
                            <div className='text-xs text-green-400 font-bold text-right inline-block float-right align-baseline'>33.42% ^</div>
                        </div>
                    </div>
                </div>
                <div class="row-span-1 col-span-1 p-3 div-content">
                    <div className='flex flex-col justify-between h-full'>
                        <div className='icon-bg'><img src={icon1}></img></div>
                        <div className='order-last text-xs text-left'>
                            <div className='text-gray-400 '>Wallet Adresses</div>
                            <div className='text-sm font-bold inline-block float-left'>$387,992.42</div>
                            <div className='text-xs text-green-400 font-bold text-right inline-block float-right align-baseline'>33.42% ^</div>
                        </div>
                     </div>
                </div>
                <div class="row-span-1 col-span-1 p-3 div-content">
                    <div className='flex flex-col justify-between h-full'>
                        <div className='icon-bg'><img src={icon1}></img></div>
                        <div className='order-last text-xs text-left'>
                            <div className='text-gray-400 '>Average block time</div>
                            <div className='text-sm font-bold inline-block float-left'>$387,992.42</div>
                            <div className='text-xs text-green-400 font-bold text-right inline-block float-right align-baseline'>33.42% ^</div>
                        </div>
                    </div>
                </div>
                <div class="row-span-1 col-span-1 p-3 div-content">
                    <div className='flex flex-col justify-between h-full'>
                        <div className='icon-bg'><img src={icon1}></img></div>
                        <div className='order-last text-xs text-left'>
                            <div className='text-gray-400 '>Non Circulation supply</div>
                            <div className='text-sm font-bold inline-block float-left'>$387,992.42</div>
                            <div className='text-xs text-green-400 font-bold text-right inline-block float-right align-baseline'>33.42% ^</div>
                        </div>
                     </div>
                </div>
                <div class="row-span-1 col-span-2 rounded-xl block max-mn:hidden"><img className='w-full h-full' src={img16}/></div>
                <div class="row-span-1 col-span-1 p-3 div-content">
                    <div className='flex flex-col justify-between h-full'>
                        <div className='icon-bg'><img src={icon1}></img></div>
                        <div className='order-last text-xs text-left'>
                            <div className='text-gray-400 '>Users</div>
                            <div className='text-sm font-bold inline-block float-left'>$387,992.42</div>
                            <div className='text-xs text-green-400 font-bold text-right inline-block float-right align-baseline'>33.42% ^</div>
                        </div>
                    </div>
                </div>
                <div class="row-span-1 col-span-2 rounded-xl hidden max-mn:block"><img className='w-full h-full' src={img16}/></div>
            </div>
            {/* layout2 */}
            <div className='w-content  mt-6 lg:grid grid-cols-2 gap-4 max-lg:flex flex-col'>
                <div class="col-span-1 div-content p-4 text-left "> 
                    <div className='text-sm font-bold'>Top DeFi Tokens by Market Capitalization</div>
                    <div className='text-sm'>$328,281,004,240 &nbsp;<span className=' text-red-400 text-xs font-bold'>33.42% </span></div>
                    <AreaApexChart/>
                </div>
                <div class="col-span-1 div-content p-4">
                    <div className='flex flex-col'>
                        <div><div className='inline-block float-left text-sm font-bold'>Top AMMs by volume</div><div className='inline-block float-right'><div className='flex flex-row justify-center items-center self-center'><div className=' text-xs'>View alls</div> <img className='-rotate-90 ml-1' src={arrow}></img></div></div></div>
                        <table className='w-full mt-2'>
                            <thead className=' p-2'>
                                <tr className='table-header'>
                                    <th className='text-gray-400 text-xs'>Amm</th>
                                    <th className='text-gray-400 text-xs'>Liquidity</th>
                                    <th className='text-gray-400 text-xs'>Volume 24h</th>
                                    <th className='text-gray-400 text-xs'>Change (24h)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$13,452,923.94</td>
                                    <td className='text-xs'>$10,798,739.79</td>
                                    <td className='flex justify-center items-center p-2'><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                </tr>
                                <tr>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$13,452,923.94</td>
                                    <td className='text-xs'>$10,798,739.79</td>
                                    <td className='flex justify-center items-center p-2'><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                </tr>
                                <tr>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$13,452,923.94</td>
                                    <td className='text-xs'>$10,798,739.79</td>
                                    <td className='flex justify-center items-center p-2'><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* layout3 */}
            <div className='w-content  mt-6 lg:grid grid-cols-2 gap-4 max-lg:flex flex-col'>
                <div class="col-span-1 dashboard-content p-4">
                    <div className='div-content p-4'>
                        <div className='flex flex-col'>
                            <div><div className='inline-block float-left text-sm font-bold'>NFT Tokens</div><div className='inline-block float-right'><div className='flex flex-row justify-center items-center self-center'><div className=' text-xs'>Visit Dashboard</div> <img className='-rotate-90 ml-1' src={arrow}></img></div></div></div>
                            <table className='w-full mt-2'>
                                <thead className=' p-2'>
                                    <tr className='table-header'>
                                        <th className='text-gray-400 text-xs'>Popular collection</th>
                                        <th className='text-gray-400 text-xs'>Items</th>
                                        <th className='text-gray-400 text-xs'>Holders</th>
                                        <th className='text-gray-400 text-xs'>Floor Price</th>
                                        <th className='text-gray-400 text-xs'>Vol 30D</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img className='inline-block' src={collection}></img> <div className='inline-block text-blue-400 text-xs'>name of collection...</div></td>
                                        <td className='text-xs'>15,009</td>
                                        <td className='text-xs'>5,761</td>
                                        <td><img className='inline-block w-4 h-4' src={logo}></img> <div className='inline-block text-blue-400 text-xs ml-1'>27.16</div></td>
                                        <td className='flex justify-center items-center p-2'><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    </tr>
                                    <tr>
                                        <td><img className='inline-block' src={collection}></img> <div className='inline-block text-blue-400 text-xs'>name of collection...</div></td>
                                        <td className='text-xs'>15,009</td>
                                        <td className='text-xs'>5,761</td>
                                        <td><img className='inline-block w-4 h-4' src={logo}></img> <div className='inline-block text-blue-400 text-xs ml-1'>27.16</div></td>
                                        <td className='flex justify-center items-center p-2'><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    </tr>
                                    <tr>
                                        <td><img className='inline-block' src={collection}></img> <div className='inline-block text-blue-400 text-xs'>name of collection...</div></td>
                                        <td className='text-xs'>15,009</td>
                                        <td className='text-xs'>5,761</td>
                                        <td><img className='inline-block w-4 h-4' src={logo}></img> <div className='inline-block text-blue-400 text-xs ml-1'>27.16</div></td>
                                        <td className='flex justify-center items-center p-2'><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 dashboard-content p-4">
                    <div className='div-content p-4'>
                        <div className='flex flex-col'>
                            <div><div className='inline-block float-left text-sm font-bold'>Best Staking Deals</div><div className='inline-block float-right'><div className='flex flex-row justify-center items-center self-center'><div className=' text-xs'>Visit Dashboard</div> <img className='-rotate-90 ml-1' src={arrow}></img></div></div></div>
                            <table className='w-full mt-2'>
                                <thead className=' p-2'>
                                    <tr className='table-header'>
                                        <th className='text-gray-400 text-xs w-6'>#</th>
                                        <th className='text-gray-400 text-xs text-left'>Coin</th>
                                        <th className='text-gray-400 text-xs'>Best APY</th>
                                        <th className='text-gray-400 text-xs'>Exchange</th>
                                        <th className='text-gray-400 text-xs'>Last 30 Days</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><img className='inline-block float-left' src={bitcoin}></img>&nbsp;<div className='inline-block text-blue-400 float-left '>Ocra</div></td>
                                        <td className=' text-green-400 text-xs font-bold'>33.42%</td>
                                        <td><img className='inline-block' src={BNB}></img> <div className='inline-block'>Binance</div></td>
                                        <td className='flex flex-row justify-center'><AreaApexChart1 width={150} height={70}></AreaApexChart1></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><img className='inline-block float-left' src={bitcoin}></img>&nbsp;<div className='inline-block text-blue-400 float-left '>Ocra</div></td>
                                        <td className=' text-green-400 text-xs font-bold'>33.42%</td>
                                        <td><img className='inline-block' src={BNB}></img> <div className='inline-block'>Binance</div></td>
                                        <td className='flex flex-row justify-center'><AreaApexChart1 width={150} height={70}></AreaApexChart1></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><img className='inline-block float-left' src={bitcoin}></img>&nbsp;<div className='inline-block text-blue-400 float-left '>Ocra</div></td>
                                        <td className=' text-green-400 text-xs font-bold'>33.42%</td>
                                        <td><img className='inline-block' src={BNB}></img> <div className='inline-block'>Binance</div></td>
                                        <td className='flex flex-row justify-center'><AreaApexChart1 width={150} height={70}></AreaApexChart1></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* layout4 */}
            <div className='w-content  mt-6 lg:grid grid-cols-2 gap-4 max-lg:flex flex-col'>
                <div class="col-span-1 div-content p-4 text-left">
                    <div className='text-xl font-bold'>Stables of DBX</div>
                    <div className='text-xl'>$328,281,004,240 &nbsp;<span className=' text-red-400 text-xs font-bold'>33.42%</span></div>
                    <ColumnApexChart />
                </div>
                <div class="col-span-1 div-content p-4">
                    <div className='flex flex-col'>
                        <div><div className='inline-block float-left text-sm font-bold'>Top Stablecoin Tokens by Market Capitalization</div><div className='inline-block float-right'><div className='flex flex-row justify-center items-center self-center'><div className=' text-xs'>View alls</div> <img className='-rotate-90 ml-1' src={arrow}></img></div></div></div>
                        <table className='w-full mt-2 text-left'>
                            <thead className=' p-2'>
                                <tr className='table-header'>
                                    <th className='text-gray-400 text-xs'>Name</th>
                                    <th className='text-gray-400 text-xs'>Price</th>
                                    <th className='text-gray-400 text-xs'>1h%</th>
                                    <th className='text-gray-400 text-xs'>24h %</th>
                                    <th className='text-gray-400 text-xs'>7d %</th>
                                    <th className='text-gray-400 text-xs'>Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=' p-2'>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$0.9413</td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className='text-xs text-gray-400'>$1,996,516,607</td>
                                </tr>
                                <tr>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$0.9413</td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className='text-xs text-gray-400'>$1,996,516,607</td>
                                </tr>
                                <tr>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$0.9413</td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className='text-xs text-gray-400'>$1,996,516,607</td>
                                </tr>
                                <tr>
                                    <td><img className='inline-block' src={bitcoin}></img> <div className='inline-block text-blue-400'>Ocra</div></td>
                                    <td className='text-xs'>$0.9413</td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className=''><div className='inc-rate text-green-400 text-xs'>+4.71%&nbsp;^</div></td>
                                    <td className='text-xs text-gray-400'>$1,996,516,607</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* layout5 */}
            <div className='dashboard-content w-content p-6 mt-6'>
                <div class="col-span-1 div-content p-4">
                    <div className='flex flex-col'>
                        <div className='pl-5'><div className='inline-block float-left text-xl font-bold'>Transactions</div><div className='inline-block float-right'><div className='mt-2 flex flex-row justify-center items-center self-center'><div className=' text-xs'>View all transactions</div> <img className='-rotate-90 ml-1' src={arrow}></img></div></div></div>
                        <div className='flex flex-col max-lg:hidden'>
                            <div class="h-item py-2.5 pr-3 p-4 w-full">
                                <div class="w-header bg-gray-100 border-gray-300 rounded-lg inline-block float-left h-full">
                                    <div className='flex w-full h-full'>
                                        <div class="place-self-center m-auto">
                                            <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                            <div class="font-medium text-xs">Contract cell</div>
                                            <div class="font-light text-xs">Success</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-3 font-sans text-left py-3 inline-block float-left">
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto text-purple-950">0x5666b099d4659ba081c5de23b36e8755612592b078affd60a2d5b7fa9e08892a</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto text-purple-950">0x067169F85A2229e477DFDf15CF0db7a0a1b3a20D → DBX_USD (0x91efa3–5e6143)</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto">0 DBX <span class="text-gray-300">0.022035 TX Fee</span></div>
                                    </div>
                                </div>
                                <div class="w-header text-right inline-block float-right">
                                    <div class="flex font-medium text-xs h-1/3">
                                        <div class="my-auto ml-auto text-purple-950 underline">Block #29801457</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto ml-auto">12 days ago</div>
                                        </div>
                                </div>
                            </div>
                            <div class="h-item py-2.5 pr-3 p-4 w-full">
                                <div class="w-header bg-gray-100 border-gray-300 rounded-lg inline-block float-left h-full">
                                    <div className='flex w-full h-full'>
                                        <div class="place-self-center m-auto">
                                            <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                            <div class="font-medium text-xs">Contract cell</div>
                                            <div class="font-light text-xs">Success</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-3 font-sans text-left py-3 inline-block float-left">
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto text-purple-950">0x5666b099d4659ba081c5de23b36e8755612592b078affd60a2d5b7fa9e08892a</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto text-purple-950">0x067169F85A2229e477DFDf15CF0db7a0a1b3a20D → DBX_USD (0x91efa3–5e6143)</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto">0 DBX <span class="text-gray-300">0.022035 TX Fee</span></div>
                                    </div>
                                </div>
                                <div class="w-header text-right inline-block float-right">
                                    <div class="flex font-medium text-xs h-1/3">
                                        <div class="my-auto ml-auto text-purple-950 underline">Block #29801457</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto ml-auto">12 days ago</div>
                                        </div>
                                </div>
                            </div>
                            <div class="h-item py-2.5 pr-3 p-4 w-full">
                                <div class="w-header bg-gray-100 border-gray-300 rounded-lg inline-block float-left h-full">
                                    <div className='flex w-full h-full'>
                                        <div class="place-self-center m-auto">
                                            <img class="w-2.5 h-2.5 mx-auto block lg:hidden" src={star}></img>
                                            <div class="font-medium text-xs">Contract cell</div>
                                            <div class="font-light text-xs">Success</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-3 font-sans text-left py-3 inline-block float-left">
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto text-purple-950">0x5666b099d4659ba081c5de23b36e8755612592b078affd60a2d5b7fa9e08892a</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto text-purple-950">0x067169F85A2229e477DFDf15CF0db7a0a1b3a20D → DBX_USD (0x91efa3–5e6143)</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto">0 DBX <span class="text-gray-300">0.022035 TX Fee</span></div>
                                    </div>
                                </div>
                                <div class="w-header text-right inline-block float-right">
                                    <div class="flex font-medium text-xs h-1/3">
                                        <div class="my-auto ml-auto text-purple-950 underline">Block #29801457</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto ml-auto">12 days ago</div>
                                        </div>
                                </div>
                            </div>
                            <div class="h-item py-2.5 pr-3 p-4 w-full">
                                <div class="w-header bg-gray-100 border-gray-300 rounded-lg inline-block float-left h-full">
                                    <div className='flex w-full h-full'>
                                        <div class="place-self-center m-auto">
                                            <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                            <div class="font-medium text-xs">Contract cell</div>
                                            <div class="font-light text-xs">Success</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-3 font-sans text-left py-3 inline-block float-left">
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto text-purple-950">0x5666b099d4659ba081c5de23b36e8755612592b078affd60a2d5b7fa9e08892a</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto text-purple-950">0x067169F85A2229e477DFDf15CF0db7a0a1b3a20D → DBX_USD (0x91efa3–5e6143)</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto">0 DBX <span class="text-gray-300">0.022035 TX Fee</span></div>
                                    </div>
                                </div>
                                <div class="w-header text-right inline-block float-right">
                                    <div class="flex font-medium text-xs h-1/3">
                                        <div class="my-auto ml-auto text-purple-950 underline">Block #29801457</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto ml-auto">12 days ago</div>
                                        </div>
                                </div>
                            </div>
                            <div class="h-item py-2.5 pr-3 p-4 w-full">
                                <div class="w-header bg-gray-100 border-gray-300 rounded-lg inline-block float-left h-full">
                                    <div className='flex w-full h-full'>
                                        <div class="place-self-center m-auto">
                                            <img class="w-2.5 h-2.5 mx-auto" src={star}></img>
                                            <div class="font-medium text-xs">Contract cell</div>
                                            <div class="font-light text-xs">Success</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-3 font-sans text-left py-3 inline-block float-left">
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto text-purple-950">0x5666b099d4659ba081c5de23b36e8755612592b078affd60a2d5b7fa9e08892a</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto text-purple-950">0x067169F85A2229e477DFDf15CF0db7a0a1b3a20D → DBX_USD (0x91efa3–5e6143)</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3 mt-3">
                                        <div class="my-auto">0 DBX <span class="text-gray-300">0.022035 TX Fee</span></div>
                                    </div>
                                </div>
                                <div class="w-header text-right inline-block float-right">
                                    <div class="flex font-medium text-xs h-1/3">
                                        <div class="my-auto ml-auto text-purple-950 underline">Block #29801457</div>
                                    </div>
                                    <div class="flex font-normal text-xs h-1/3">
                                        <div class="my-auto ml-auto">12 days ago</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;