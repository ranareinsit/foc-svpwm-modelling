function Footer() {
    return (
        <footer className={[
            'flex', 'flex-row', 'align-start', 'items-center', 'justify-between', 'w-full',
            'h-24', 'bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'overflow-hidden'
        ].join(' ')}>
            <div className={"flex h-full p-5"}>
                <p >© 20XX Company, Inc</p>
            </div>
            <div className={"flex h-full p-5"}>
                <ul className="flex sm:justify-center space-x-4 text-xs">
                    <li ><a href="#" >Home</a></li>
                    <li ><a href="#" >API</a></li>
                    <li ><a href="#" >Documentation</a></li>
                    <li ><a href="#" >About</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
