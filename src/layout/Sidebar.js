import React, { useState } from 'react';

export const DraggableItem = (props) => {
    const { item, onDragStart } = props;
    const [state, setState] = useState({ index: props.index });

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify(state));
    };

    return (
        <div draggable onDragStart={handleDragStart}>
            {item}
        </div>
    );
};

export const AnchorItem = (props) => {
    const { i } = props
    return (
        <a href="#" className={[
            'p-6', 'max-w-sm', 'mx-auto',
            'rounded-xl', 'shadow-md', 'flex',
            'items-center', 'space-x-4', 'w-30',
            'h-20', 'overflow-hidden', 'bg-white',
            'hover:overflow-visible',
            'hover:z-50',
            'hover:border',
            'hover:border-sky-500'
        ].join(' ')}>
            <div className="shrink-0">
                <img src="https://placehold.co/200x200" alt="❄️" width="32" height="32" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{i}</div >
                <p className="text-slate-500">description</p>
            </div>
        </a>
    )
}

function Sidebar() {
    return (
        <aside className={"flex flex-col w-3/12 h-full border-r border-sky-500 overflow-hidden"} >
            <div className='flex justify-start w-full p-5 bg-slate-50'>
                <h1 className='font-sans text-lg font-semibold'>Items</h1>
            </div>
            <div className="flex flex-col space-y-4 p-5 overflow-auto" >
                {[...new Array(20)].map((e, i) => {
                    const Item = <AnchorItem i={i + 1} />
                    return (
                        <DraggableItem item={Item} key={i + 1} index={i + 1} />
                    )
                })}
            </div>
        </aside>
    );
}

export default Sidebar;
