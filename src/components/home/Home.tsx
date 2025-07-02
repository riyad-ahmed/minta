import React from 'react'
import NewCollection from '@/src/components/home/NewCollection'
import ThisWeek from '@/src/components/home/ThisWeek';

function Home() {
    return (
        <>
            <NewCollection />
            <ThisWeek />
        </>
    );
}

export default Home