'use client'

import Image from 'next/image'
import ImgFilter from '../../assets/Img_filter.svg'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function FilterCards() {
  return (
    <div className="px-6 flex items-center gap-4">
      <button className="bg-purple-700 px-8 py-3 rounded flex items-center gap-2 text-sm leading-6 text-white font-normal ">
        <Image src={ImgFilter} alt="Image Filter" width={24} height={24} />
        Filtrar
      </button>

      <div
        id="div_search"
        className="flex-1 flex items-center gap-3 px-6 py-3 focus-within:text-white rounded focus-within:outline focus-within:outline-[2px] focus-within:outline-purple-700 "
      >
        <MagnifyingGlassIcon
          id="icon"
          width={24}
          height={24}
          className="text-gray-700"
        />
        <input
          type="text"
          placeholder="Busque por cards, assuntos ou responsáveis..."
          className="flex-1 text-base leading-4 px-1 py-2 bg-black-800 placeholder:text-gray-600 focus:outline-0"
        />
      </div>
    </div>
  )
}
