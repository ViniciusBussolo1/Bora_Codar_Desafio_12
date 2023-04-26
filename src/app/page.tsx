import Link from 'next/link'

import DragAndDrop from '@/components/DrangAndDrop/DragAndDrop'
import FilterCards from '@/components/FilterCards/FilterCards'

import Image from 'next/image'

import ImgLogo from '../assets/Img_logo.svg'
import ImgProfile from '../assets/Img_profile.svg'

import {
  WrenchIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  DeviceTabletIcon,
  PencilIcon,
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
                  <ClipboardDocumentIcon className="w-5 h-5" />
                  <span className="font-medium text-base leading-5">
                    Adicionar
                  </span>
                </li>
                <li className="flex gap-4 items-center cursor-pointer text-purple-300 hover:text-white">
                  <UserGroupIcon className="w-5 h-5" />
                  <span className="font-medium text-base leading-5">
                    Equipes
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

        <FilterCards />

        <DragAndDrop />
      </div>
    </>
  )
}
