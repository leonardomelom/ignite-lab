import React from 'react';
import { Navbar } from '../components/Navbar';
import { Player } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <main className='flex flex-1'>
      <Player />
      <Sidebar/>
    </main>
    </div>
  );
}

  