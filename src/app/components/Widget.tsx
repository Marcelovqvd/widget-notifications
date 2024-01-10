import React from "react"

import { Rocket } from "lucide-react"

export default function Widget() {
  return (
    <div className='w-[448px] rounded overflow-hidden'>
      <div className='bg-zinc-800 py-4 px-6'>
        <span className='font-bold'>Notificações</span>
        <button className='text-violent-500 font-bold text-xs hover:text-violet-400'>
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      <div>
        <div className='bg-zinc-950 px-5 py-2 text-sm text-zinc-400'>
          Recentes
        </div>

        <div className='divide-y-2 divide-zinc-950'>
          <div className='bg-zinc-900 px-8 py-4 flex items-start gap-6'>
            <Rocket className='w-6 h-6 text-violet-500 mt-3' />
            <div className='flex-1 flex flex-col gap-2'>
              <p className='text-sm leading-relaxed text-zinc-100'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, voluptates.
              </p>
              <div className='text-xxs tetx-zinc-400 flez items-center gap-1'>
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>

          <div className='bg-zinc-900 px-8 py-4 flex items-start gap-6'>
            <Rocket className='w-6 h-6 text-violet-500 mt-3' />
            <div className='flex-1 flex flex-col gap-2'>
              <p className='text-sm leading-relaxed text-zinc-100'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, voluptates.
              </p>
              <div className='text-xxs tetx-zinc-400 flez items-center gap-1'>
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-zinc-950 px-5 py-2 text-sm text-zinc-400'>
          Antigas
        </div>

        <div className='divide-y-2 divide-zinc-950'>
          <div className='bg-zinc-900 px-8 py-4 flex items-start gap-6'>
            <Rocket className='w-6 h-6 text-violet-500 mt-3' />
            <div className='flex-1 flex flex-col gap-2'>
              <p className='text-sm leading-relaxed text-zinc-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, voluptates.
              </p>
              <div className='text-xxs tetx-zinc-400 flez items-center gap-1'>
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>

          <div className='bg-zinc-900 px-8 py-4 flex items-start gap-6'>
            <Rocket className='w-6 h-6 text-violet-500 mt-3' />
            <div className='flex-1 flex flex-col gap-2'>
              <p className='text-sm leading-relaxed text-zinc-400'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, voluptates.
              </p>
              <div className='text-xxs tetx-zinc-400 flez items-center gap-1'>
                <span>Convite</span>
                <span>Há 3 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
