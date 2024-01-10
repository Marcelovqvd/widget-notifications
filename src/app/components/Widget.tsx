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

        <div className='bg-zinc-900 px-8 py-4 flex items-start gap-6'>
          <Rocket className='w-6 h-6 text-violet-500' />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, voluptates.
            </p>
            <div className='text-xxs'>
              <span>Convite</span>
              <span>Há 3 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
