import React from 'react'

export const Card = ({ icon, cardName, price, ret, textColor, bgColor, TopProduct }) => {

    return (
        <div className='w-full p-3 bg-white rounded-xl flex  justify-between items-end gap-2'>
            <div className='flex  gap-2'>
                <div className={`${TopProduct ? 'w-7 h-7 ' : 'w-10 h-10 '}flex justify-center items-center bg-[#487FE4] text-white rounded-xl text-xl`}>
                    {icon}
                </div>
                <div className='flex flex-col items-center'>
                    <p className={`text-sm ${!TopProduct ? 'font-medium' : ""}`}>{cardName}</p>
                    <p className={` ${!TopProduct ? 'font-medium text-sm' : "text-[10px]"}`}>{price}</p>
                </div>
            </div>
            <div className={`text-[#F58282] bg-[#FEF1F1] px-2 py-1 text-[9px] rounded-xl`}>{ret}</div>
        </div>
    )
}
export const ChatCard = ({ name1, price1, name2, price2 }) => {

    return (
        <div className='w-full flex '>
            <p className='flex-1   border-r-2  px-5 py-2'>
                <p className='text-sm '>{name1}</p>
                <p className='text-md font-medium'>{price1}</p>
            </p>
            <p className='flex-1 px-5 py-2'>
                <p className='text-sm '>{name2}</p>
                <p className='text-md font-medium'>{price2}</p>
            </p>
        </div>
    )
}
