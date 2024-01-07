
function Header() {
    return (
        <header className={[
            'flex', 'flex-row', 'align-middle', 'justify-around',
            'w-full', 'bg-gradient-to-r', 'from-sky-500',
            'to-indigo-500', 'h-24', 'overflow-hidden'
        ].join(' ')}>
            <div className="flex items-center">
                <a href="#" >
                    <img src="https://placehold.co/200x200" alt="❄️" width="64" height="64" />
                </a>
            </div>
            <div className="flex items-center">
                <ul className="flex sm:justify-center space-x-4 text-xs">
                    <li className="flex p-1" ><a href="#" >Home</a></li>
                    <li className="flex p-1" ><a href="#" >API</a></li>
                    <li className="flex p-1" ><a href="#" >Documentation</a></li>
                </ul>
            </div>
            <div className="flex flex-row items-center justify-between ">
                <form >
                    <input type="search" className="shadow-md   focus:outline-none" />
                </form>
                <button className="shadow-md bg-white hover:bg-slate-100  ocus:outline-none">
                    search
                </button>
            </div>
            <div className="flex items-center">

                <ul className="flex sm:justify-center space-x-4 text-xs">
                    <li className="flex p-1"><a href="#">New project...</a></li>
                    <li className="flex p-1"><a href="#">Settings</a></li>
                    <li className="flex p-1"><a href="#">Profile</a></li>
                    <li className="flex p-1"><a href="#">Sign out</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
