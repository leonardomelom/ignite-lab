import React from 'react';
import { useParams } from 'react-router-dom';
import Icon from '../components/404';
import { Navbar } from '../components/Navbar';
import { PlayerVideo } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  const { slug } = useParams<{slug:string}>()

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <main className='flex flex-1'>
      {slug ? <PlayerVideo lessonSlug={slug}/> :
       <div className='flex-1 flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-bold uppercase'>Ops, nada encontrado aqui!</h1>
        <div className='mt-16  mx-auto'>
          <Icon  />
        </div>
        </div>}
      <Sidebar/>
    </main>
    </div>
  );
}

  