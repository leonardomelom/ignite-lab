import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, CircleNotch, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps{
  lessonSlug:string;
}

export function PlayerVideo({lessonSlug}: VideoProps){
  const { data } = useGetLessonBySlugQuery({
    variables:{
      slug:lessonSlug,
    }
  }) 
  if(!data || !data.lesson){
    return <div className='flex-1 flex items-center justify-center'><span><CircleNotch size={120}  className="animate-spin"/></span></div>
  }
  return ( 
  <div className="flex-1">
    <div>
    <div className="bg-black flex justify-center">
      <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player>
          <Youtube videoId={data?.lesson?.videoId} />
          <DefaultUi/>
          
        </Player>
      </div>
    </div>
    </div>

    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16  2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm: flex-col">
        <div className="flex-1 ">
          <h1 className="text-2xl font-bold">
          {data.lesson.title}
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
          {data?.lesson?.description}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
            className="h-16 w-16 rounded-full border-2 border-blue-500"
            src={data?.lesson?.teacher?.avatarURL}
            alt="" 
            />
            <div className="leading-relaxed">
              <strong className="font-bold text-2xl block">{data?.lesson?.teacher?.name}</strong>
              <span className="text-gray-200 text-sm block">{data?.lesson?.teacher?.bio}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors ">
            <DiscordLogo size={24}/>
            Comunidade do Discord</a>
          <a href="#" className="buttonChallenge">
            <Lightning size={24}/>
            Desafio</a>
         
        </div>
      </div>
      <div className="gap-8 mt-20 grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm: grid-cols-1 ">
        <a
        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors " 
        href=""
        >
           <div className="bg-purple-500 m-4 rounded h-3/4 p-6 flex items-center">
            <FileArrowDown size={40}/>
           </div>
           <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Material Complementar</strong>
            <p className="text-m text-gray-200 mt-2">
              Acesse o material complementar para acelerar seu desenvolvimento!
            </p>
           </div>
           <div className="h-full p6 flex items-center 2xl:flex xl:flex lg:flex md:flex sm: hidden">
            <CaretRight size={24}/>
           </div>
        </a>

        <a
        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" 
        href=""
        >
           <div className="bg-purple-500 m-4 rounded p-6 h-3/4 flex items-center">
            <Image size={40}/>
           </div>
           <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Wallapers Exclusivos</strong>
            <p className="text-m text-gray-200 mt-2">
              Acesse o material complementar para acelerar seu desenvolvimento!
            </p>
           </div>
           <div className="h-full p6 flex items-center 2xl:flex xl:flex lg:flex md:flex sm: hidden">
            <CaretRight size={24}/>
           </div>
        </a>

      </div>
    </div>
  </div>
  )
}