import ecommercelogo from '../assets/images/E-CommerceLogo.png'
const NavBar = () => (
    <>
        <nav className="dark:bg-slate-700  dark:text-slate-400 border-slate-900/10 border-b text-slate-500">
            <div className="max-w-screen-2xl w-full pl-14 pr-14 mx-auto">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-12 w-auto" src={ecommercelogo} alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href='element' className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Elements</a>
                                {/* <a className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Shop</a>
                                <a className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Track Order</a>
                                <a className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About us</a>
                                <a className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacts</a> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>

                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>
                            </div> 
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                    <a href="#" className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                    <a href="#" className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                </div>
            </div> */}
        </nav>
    </>
);

export default NavBar;
