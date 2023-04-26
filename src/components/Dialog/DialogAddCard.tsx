import FormCard from '../Form/FormCard'

import { XMarkIcon } from '@heroicons/react/24/outline'

type DialogAddCardProps = {
  handleModalClose: () => void
}

export default function DialogAddCard({
  handleModalClose,
}: DialogAddCardProps) {
  return (
    <dialog className="bg-gray-700 rounded-md">
      <div className="w-full flex justify-end items-center">
        <button id="buttonModalClose" onClick={() => handleModalClose()}>
          <XMarkIcon className="w-5 h-5 text-purple-700" />
        </button>
      </div>
      <FormCard />
    </dialog>
  )
}
