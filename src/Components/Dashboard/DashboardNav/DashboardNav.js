import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import { main_menu } from '../../Routers/Routers';
const DashboardNav = () => {
    const [close, setClose] = useState(false)
    const [DropdownEnter, setDropdownEnter] = useState(-1)

    return (
        <div  className='h-full'>
            <div className={`flex flex-col items-center justify-between h-full overflow-hidden transition-all duration-300  ease-in-out text-[#6B6C7D] bg-[#000321] rounded ${close ? 'w-16 duration-300' : 'w-60 '}`}>
                <div className=' w-full flex flex-col justify-between '>
                    <NavLink to='/' className={`w-full  ${close ? 'px-0' : 'px-4'}`}>
                        <div onClick={() => setClose(!close)} className={` w-full items-center mt-3 h-12  ${close ? '  flex  items-center w-full ml-3' : 'flex flex-row '}`}>
                            <div className={`${close ? '' : 'py-1'}`}>
                                <svg className={`w-8 h-8  fill-current ${close && 'mx-auto ml-1'} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                </svg>
                            </div>

                            <div className=' overflow-hidden'>
                                <span className={`transition-all duration-300 ease-out overflow-hidden   font-bold ${close ? ' translate-x-[-24rem] -ml-20  ' : ' translate-x-0 pl-2'}`}  >The App</span>
                            </div>
                        </div>
                    </NavLink>
                    <div className="w-full px-2">
                        <div className="flex flex-col  items-center w-full mt-3 border-t">
                            {
                                main_menu.map((menu, index) => <div key={menu?.id} className='w-full hover:text-white' >
                                    <div className="w-full flex  items-center justify-between h-12 px-3  rounded ">
                                        <NavLink to={menu?.Path} className='flex items-center gap-3 '>
                                            <div className={` ${close ? '  py-1  ' : 'py-1'}`}>
                                                <span className={`w-8 h-8 stroke-current  ${close && 'mx-auto '} `}>{menu?.icon}</span>
                                            </div>
                                            <div className='overflow-hidden'>
                                                <span className={`transition-all duration-300 ease-out overflow-hidden text-[16px]  font-bold  ${close ? ' translate-x-[-24rem] -ml-21 hidden' : ' translate-x-0 pl-3'}`}  >{menu?.Route}</span>
                                            </div>
                                        </NavLink>
                                        <div onMouseEnter={() => setDropdownEnter(index)} className='overflow-hidden  cursor-pointer'>
                                            {
                                                menu?.Service && <span className={`transition-all duration-300 ease-out overflow-hidden  font-bold text-right  ${close ? ' translate-x-[-24rem] -ml-20  ' : ' translate-x-0'}`}  >{<BsChevronDown />}</span>
                                            }

                                        </div>
                                    </div>
                                    <nav  className="pl-12 text-md font-medium">
                                        <ul onMouseLeave={() => setDropdownEnter(-1)} className='transition-all duration-300 ease-out'>
                                            {
                                                menu?.Service?.map((Drop) => <div>{(DropdownEnter == index) && <li className="px-3 py-1 rounded text-[#6B6C7D] hover:text-white"><NavLink to={Drop?.ServicePath}>{Drop?.ServiceRoute}</NavLink></li>}</div>)
                                            }
                                        </ul>
                                    </nav>
                                </div>

                                )
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardNav;