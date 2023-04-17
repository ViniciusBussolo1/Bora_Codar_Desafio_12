import Image from 'next/image'

import DragAndDrop from '@/components/DragAndDrop'

import ImgLogo from '../assets/Img_logo.svg'
import ImgProfile from '../assets/Img_profile.svg'
import ImgFilter from '../assets/Img_filter.svg'

import {
  WrenchIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  DeviceTabletIcon,
  PencilIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <aside className="bg-purple-700 w-64 h-screen pl-9 pr-7 pt-8">
        <div className="flex flex-col items-start gap-14 ">
          <Image src={ImgLogo} alt="Logo image" width={49.89} height={56} />
          <div>
            <nav>
              <ul className="flex flex-col gap-9">
                <li className="flex gap-4 items-center cursor-pointer text-purple-300 hover:text-white">
                  <DeviceTabletIcon className="w-5 h-5" />
                  <span className="font-medium text-base leading-5">
                    Boards
                  </span>
                </li>
                <li className="flex gap-4 items-center cursor-pointer text-purple-300 hover:text-white">
                  <UserGroupIcon className="w-5 h-5" />
                  <span className="font-medium text-base leading-5">
                    Equipes
                  </span>
                </li>
                <li className="flex gap-4 items-center cursor-pointer text-purple-300 hover:text-white">
                  <ClipboardDocumentIcon className="w-5 h-5" />
                  <span className="font-medium text-base leading-5">
                    Relatórios
                  </span>
                </li>
                <li className="flex gap-4 items-center cursor-pointer text-purple-300 hover:text-white">
                  <WrenchIcon className="w-5 h-5" />
                  <span className="font-medium text-base leading-5">
                    Ajustes
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
      <div className="bg-black-800 flex-1 mt-2 rounded-tl-[2rem] py-12 px-8 flex flex-col gap-8">
        <div className="flex gap-3 justify-between px-6">
          <div className="flex gap-3 items-center">
            <h2 className="text-3xl leading-[2.625rem] font-bold text-purple-700">
              Meu Kanban
            </h2>
            <PencilIcon width={24} height={24} className="text-gray-400" />
          </div>

          <Image src={ImgProfile} alt="Image Profile" width={64} height={64} />
        </div>

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
              className="text-[#28272C]"
            />
            <input
              type="text"
              placeholder="Busque por cards, assuntos ou responsáveis..."
              className="flex-1 text-base leading-4 px-1 py-2 bg-black-800 placeholder:text-[#757575] focus:outline-0"
            />
          </div>
        </div>

        <DragAndDrop />
      </div>
    </>
  )
}
