import React, { useState } from 'react';
import { AnchorItem } from './Sidebar'

const DroppableArea = () => {
    const [dropped, setDropped] = useState([]);

    const onDrop = (e) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));

        setDropped((prevShapes) => {
            if (prevShapes.length > 9) {
                return [...prevShapes.slice(1), data]
            }
            return [...prevShapes, data]
        });
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };



    return (
        <div className={[
            'grid', 'grid-cols-3', 'gap-x-50',
            'w-full', 'h-full',
            'border', 'border-sky-500', 'pt-5', 'rounded-lg',

        ].join(' ')} onDrop={onDrop} onDragOver={onDragOver}>
            {dropped.map((data, index) => {
                return <AnchorItem key={data.index + Math.random()} i={data.index} />;
            })}
        </div>
    );
};

function Content() {
    return (
        <section className={"flex flex-col w-9/12 h-full overflow-hidden"}>
            <div className='flex w-full p-5 bg-slate-50'>
                <h1 className='font-sans text-lg font-semibold'>Dashboard</h1>
            </div>
            <div className={"flex w-full h-full p-5"} >
                <DroppableArea />
            </div>
        </section>
    );
}

export default Content;
