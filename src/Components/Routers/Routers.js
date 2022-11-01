import { RiAppsFill } from "react-icons/ri";
import { AiOutlineCalendar, AiFillFileAdd, AiOutlineShoppingCart, AiOutlineMail, AiFillProject } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { BiBookAlt } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { SiGnuprivacyguard, SiElement } from "react-icons/si";
import { GiNautilusShell } from "react-icons/gi";
import { MdTransform } from "react-icons/md";
const main_menu = [
    {
        id: 1,
        Route: 'Dashboard',
        Path: '/',
        icon: <RiAppsFill />,
        Service: [
            {
                ServicePath: '/E-commerce',
                ServiceRoute: 'E-commerce',
            },
            {
                ServicePath: '/Saas',
                ServiceRoute: 'Saas',
            },
            {
                ServicePath: '/Crypto',
                ServiceRoute: 'Crypto',
            }
        ]
    },
    {
        id: 2,
        Route: 'Calendar',
        Path: '/calendar',
        icon: <AiOutlineCalendar />,
        Service: [
            {
                ServicePath: '/',
                ServiceRoute: 'E-commerce',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Saas',
            }
        ]
    },
    {
        id: 3,
        Route: 'Chat',
        Path: '/chat',
        icon: <BsChatDotsFill />,
        Service: [
            {
                ServicePath: '/',
                ServiceRoute: 'E-commerce',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Saas',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Crypto',
            }
        ]
    },
    {
        id: 4,
        Route: 'File Manager',
        Path: '/',
        icon: <AiFillFileAdd />,
        Service: [
            {
                ServicePath: '/',
                ServiceRoute: 'E-commerce',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Saas',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Crypto',
            }
        ]
    },
    {
        id: 5,
        Route: 'E-commerce',
        Path: '/',
        icon: <AiOutlineShoppingCart />,
        Service: [
            {
                ServicePath: '/',
                ServiceRoute: 'E-commerce',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Saas',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Crypto',
            }
        ]
    },
    {
        id: 6,
        Route: 'Email',
        Path: '/email',
        icon: <AiOutlineMail />
    },
    {
        id: 7,
        Route: 'Invoices',
        Path: '/invoices',
        icon: <BiBookAlt />
    },
    {
        id: 8,
        Route: 'Projects',
        Path: '/projects',
        icon: <AiFillProject />
    },
    {
        id: 9,
        Route: 'Contacts',
        Path: '/contacts',
        icon: <RiContactsFill />
    },
    {
        id: 10,
        Route: 'Authentication',
        Path: '/authentication',
        icon: <SiGnuprivacyguard />
    },
    {
        id: 11,
        Route: 'Utility',
        Path: '/utility',
        icon: <GiNautilusShell />
    },
    {
        id: 12,
        Route: 'UI Element',
        Path: '/ui_element',
        icon: <SiElement />
    },
    {
        id: 3,
        Route: 'Forms',
        Path: '/forms',
        icon: <MdTransform />,
        Service: [
            {
                ServicePath: '/',
                ServiceRoute: 'E-commerce',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Saas',
            },
            {
                ServicePath: '/',
                ServiceRoute: 'Crypto',
            }
        ]
    },
]
export { main_menu }