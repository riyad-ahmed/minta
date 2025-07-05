"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import NewCollection from '@/src/components/home/NewCollection'
import ThisWeek from '@/src/components/home/ThisWeek';
import { Collection } from 'mongodb';
import XivCollections from './XivCollections';

function Home() {
    return (
        <>
            <NewCollection />
            <ThisWeek />
            <XivCollections />
        </>
    );
}

export default Home