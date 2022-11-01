import React, { } from 'react';
import { Header } from './Header/Header';
import { Card, ChatCard } from './Card/Card.js'
import { RiPieChartFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import Chart, { LineCardChart, PieChartCard } from './Chart/Chart';
import './DashboardPage.css'
import Images from '../../../../img/images.jpg'
const DashboardPage = () => {


  return (
    <div className='w-full bg-[#F2F3F8] py-3  px-5'>
      {/* ============= header section ==============  */}
      <Header />
      {/* ================ content section =================  */}
      <div className='w-full flex gap-5 mt-5'>
        <div className='w-9/12'>
          {/* ================ card are  =================  */}
          <div className='flex justify-between items-center gap-3 '>
            <Card icon={<RiPieChartFill />} cardName={"Revenue"} price={'$21,456'} ret={'+2.65%'} textColor={'#81BE8B'} bgColor={'#EFF8F0'} />
            <Card icon={<FaShoppingCart />} cardName={"Orders"} price={'$5,643'} ret={'+0.82%'} textColor={'#F58282'} bgColor={'#FEF1F1'} />
            <Card icon={<HiUsers />} cardName={"Customers"} price={'$45,254'} ret={'-1.04%'} textColor={'#F58282'} bgColor={'#FEF1F1'} />
          </div>
          {/* ====================== overview and chart section  ===========================  */}
          <div className='w-full my-3 p-3 bg-white rounded-xl'>
            {/* ================ year select  =============== */}
            <div className='flex justify-between item-center'>
              <p className='text-black text-sm font-medium'>overview</p>
              <p className='text-black text-sm font-medium lowercase'>
                <span className='font-bold'>sort By : <span>
                  <select className='font-normal'>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </span> </span>
              </p>
            </div>
            {/*  overview and chart section */}
            <div className='flex gap-10 my-5 justify-between '>
              <div className='w-/12'>
                <p className='text-sm text-'>This Month</p>
                <div className='flex items-center gap-5'>
                  <p className='text-xl font-medium'>$21,456</p>
                  <div className={`text-[#81BE8B] bg-[#EFF8F0] px-2 py-1 text-[9px] rounded-xl`}>1.04%</div>
                </div>
                <div className='w-full divide-y  '>
                  <ChatCard name1={'order'} price1={'25,42'} name2={'sales'} price2={'16,74'} />
                  <ChatCard name1={'sales'} price1={'16,74'} name2={'order'} price2={'19,33'} />
                  <ChatCard name1={'Incom'} price1={'$21,53'} name2={'Expen'} price2={'$41,03'} />
                </div>
              </div>
              <Chart className={'w-full'} />
            </div>
          </div>
          {/* ================== 3 card and Graph =============  */}
          <div className='flex gap-5 justify-between'>
            {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% card 1  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/}
            <div className='w-full  p-3    bg-white rounded-xl '>
              <div className='flex justify-between item-center'>
                <p className='text-black text-sm font-medium'>User Active</p>
                <p className='text-black text-sm font-medium lowercase'>
                  <span className='font-bold'>sort By : <span>
                    <select className='font-normal'>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </span> </span>
                </p>
              </div>
              <p className='text-sm text-'>This Month</p>
              <div className='flex items-center gap-5'>
                <p className='text-xl font-medium'>$21,456</p>
                <div className={`text-[#81BE8B] bg-[#EFF8F0] px-2 py-1 text-[9px] rounded-xl`}>1.04%</div>
              </div>
              <LineCardChart />
            </div>
            {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% card 2  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/}
            <div className='w-full p-3 bg-white rounded-xl'>
              <div className='flex justify-between item-center'>
                <p className='text-black text-sm font-medium'>Order State</p>
                <p className='text-black text-xl font-medium lowercase'>: </p>
              </div>

              <PieChartCard />
            </div>
            {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% card 3  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/}
            <div className='w-full  p-3 bg-white rounded-xl'>
              <div className='flex justify-between item-center'>
                <p className='text-black text-sm font-medium'>Top Product</p>
                <p className='text-black text-sm font-medium lowercase'>
                  <span className='font-bold'><span>
                    <select className='font-normal'>
                      <option value="volvo">Month</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </span> </span>
                </p>
              </div>
              <Card icon={<HiUsers />} TopProduct={true} cardName={"Revenue"} price={'$21,456'} ret={'+2.65%'} textColor={'#81BE8B'} bgColor={'#EFF8F0'} />
              <Card icon={<RiPieChartFill />} TopProduct={true} cardName={"Revenue"} price={'$21,456'} ret={'+2.65%'} textColor={'#81BE8B'} bgColor={'#EFF8F0'} />
              <Card icon={<FaShoppingCart />} TopProduct={true} cardName={"Revenue"} price={'$21,456'} ret={'+2.65%'} textColor={'#81BE8B'} bgColor={'#EFF8F0'} />
              <Card icon={<HiUsers />} TopProduct={true} cardName={"Revenue"} price={'$21,456'} ret={'+2.65%'} textColor={'#81BE8B'} bgColor={'#EFF8F0'} />
            </div>
          </div>

        </div>
        {/* ================ Right content  =================  */}
        <div className='w-3/12 bg-white'>
          {/* ------------------- profile section ----------------- */}
          <div className='layered-image  rounded-xl relative '>
            <img src={require('../../../../img/profile.jpg')} className='absolute left-[38%] bottom-[-30%] w-16 h-16 rounded-full border-white border-2' />
          </div>
          {/* ================ other content ========= */}
          <div className='w-full p-3'>
            <p className='text-center text-md font-medium mt-5'>Jennifer Bennett</p>
            <p className='text-center text-sm mb-2'>Product Designer</p>
            <ChatCard name1={'order'} price1={'25,42'} name2={'sales'} price2={'16,74'} />
            <hr className='mt-1 mb-2' />
            {/* --------------- % tench ===========  */}
            <div className='w-full overflow-hidden'>
              <div className='flex justify-between item-center'>
                <p className='text-black text-sm font-medium'>Earning</p>
                <p className='text-black text-xl font-medium lowercase'>:</p>
              </div>
              {/* ===================  ==============*/}
              <div className='w-full relative z-10'>
                <div className='w-52 h-52 mx-auto bg-[#487FE4] rounded-full p-3 flex justify-center items-center'>
                  <div className='w-40 h-40 bg-white rounded-full flex justify-center pt-10'> 20%
                  </div>
                </div>
                <div className='w-full h-28 bg-white absolute bottom-0 '>
                  <h1 className='text-center text-xl font-bold mt-1'>$26,256</h1>
                  <h1 className='text-center text-sm'>Earning this Month</h1>
                  {/* ============ */}
                  <div className='flex justify-center gap-2 '>
                    <span className={` text-[#F58282] bg-[#FEF1F1] px-2 py-1 text-[9px] rounded-xl`}>0.32%</span>
                    <h1>From previous period</h1>
                  </div>
                  <hr className='mt-2' />
                  <h1>Recent Activity</h1>
                </div>
              </div >
              <div className='flex flex-col gap-4'>
                <div className='flex justify-center items-center gap-3'>
                  <p className='bg-[#cacaca] p-2 text-black text-xl font-bold rounded-xl'>12 <br /> set</p>
                  <p>It is a long established fact that</p>

                </div>
                <div className='flex justify-center items-center gap-3'>
                  <p className='bg-[#cacaca] p-2 text-black text-xl font-bold rounded-xl'>13 <br /> set</p>
                  <p>There are many variations of passages</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;