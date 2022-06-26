import React from 'react';
import { useParams } from 'react-router-dom';
import Icon from '../components/404';
import { Navbar } from '../components/Navbar';
import { PlayerVideo } from '../components/Player';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  const { slug } = useParams<{slug:string}>()

  return (
    <div className='flex flex-col min-h-screen '>
    <Navbar/>
    <main className='flex flex-1 2xl:flex-row xl:flex-row lg:flex-col md:flex-col'>
      {slug ? <PlayerVideo lessonSlug={slug}/> :
       <div className='flex-1 flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-bold uppercase'>Ops, nada encontrado aqui!</h1>
        <div className='mt-16  mx-auto'>
          <Icon  />
        </div>
        </div>}
       <div className='block 2xl:block xl:block lg: hidden md: hidden sm: hidden'>
      <Sidebar />
      </div>
    </main>
    </div>
  );
}

  