"use client"

import React, { useState } from 'react';

// import Image from 'next/image'

import Header from '@/layout/Header'
import Content from '@/layout/Content'
import Footer from '@/layout/Footer'
import Sidebar from '@/layout/Sidebar'


function Dashboard() {
  return (
    <>
      <Header />
      <main className={'flex flex-row w-full h-full min-h-96'}>
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
