'use client'

import { useContext, useState } from 'react'
import uuid from 'react-uuid'

import DialogAddCard from '../Dialog/DialogAddCard'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'

import { PlusIcon } from '@heroicons/react/24/outline'
import { AddCardsContext } from '@/context/AddCardsContext'

interface tableProps {
  id: string
  description: string
  title: string
  techs: {
    name: string
  }[]
}

export default function DragAndDrop() {
  const [tableDoing, setTableDoing] = useState<Array<tableProps>>([])
  const [tableDone, setTableDone] = useState<Array<tableProps>>([])

  const { dataCard, setDataCard } = useContext(AddCardsContext)

  function handleOnDragEnd(result: DropResult) {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return 1
    }

    let add
    const toDo = dataCard
    const doing = tableDoing
    const done = tableDone

    if (source.droppableId === 'tableToDo') {
      add = toDo[source.index]
      toDo.splice(source.index, 1)
    } else if (source.droppableId === 'tableDoing') {
      add = doing[source.index]
      doing.splice(source.index, 1)
    } else {
      add = done[source.index]
      done.splice(source.index, 1)
    }

    if (destination.droppableId === 'tableToDo') {
      toDo.splice(destination.index, 0, add)
    } else if (destination.droppableId === 'tableDoing') {
      doing.splice(destination.index, 0, add)
    } else {
      done.splice(destination.index, 0, add)
    }

    setDataCard(toDo)
    setTableDoing(doing)
    setTableDone(done)
  }

  function handleOpenModal() {
    const buttonOpen = document.getElementById('buttonModalOpen')

    const modal = document.querySelector('dialog')

    buttonOpen!.onclick = () => {
      modal?.showModal()
    }
  }

  function handleModalClose() {
    const buttonClose = document.getElementById('buttonModalClose')
    const modal = document.querySelector('dialog')

    buttonClose!.onclick = () => {
      modal?.close()
    }
  }

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    outline: isDragging ? '2px solid purple' : '2px solid gray',
    borderRadius: '4px',

    ...draggableStyle,
  })

  return (
    <div className="px-6 flex gap-12 justify-between">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tableToDo">
          {(provided) => (
            <div className="flex-1 py-6 px-4 flex flex-col gap-6 bg-gray-950 rounded">
              <div className="flex items-center justify-between">
                <span className="text-purple-700 text-xl font-bold">
                  A fazer
                </span>
                <button id="buttonModalOpen" onClick={() => handleOpenModal()}>
                  <PlusIcon className="w-7 h-7 text-purple-700" />
                </button>
                <DialogAddCard handleModalClose={() => handleModalClose()} />
              </div>

              <ul
                className="w-full px-6 flex flex-col gap-8"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {dataCard.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          key={item.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex flex-col gap-3 p-2"
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                          )}
                        >
                          <span className="text-sm font-bold text-white">
                            {' '}
                            {item.title}
                          </span>
                          <p className="text-sm font-medium text-gray-500">
                            {item.description}
                          </p>
                          <div className="flex gap-2">
                            {item.techs.map((tech) => (
                              <span
                                key={uuid()}
                                className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="tableDoing">
          {(provided) => (
            <div className="flex-1 py-6 px-4 flex flex-col gap-6 bg-gray-950 rounded">
              <span className="text-purple-700 text-xl font-bold">
                Active Tasks
              </span>
              <ul
                className="w-full px-6 flex flex-col gap-8"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tableDoing.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          key={item.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex flex-col gap-3 p-2"
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                          )}
                        >
                          <span className="text-sm font-bold text-white">
                            {' '}
                            {item.title}
                          </span>
                          <p className="text-sm font-medium text-gray-500">
                            {item.description}
                          </p>
                          <div className="flex gap-2">
                            {item.techs.map((tech) => (
                              <span
                                key={uuid()}
                                className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="tableDone">
          {(provided) => (
            <div className="flex-1 py-6 px-4 flex flex-col gap-6 bg-gray-950 rounded">
              <span className="text-purple-700 text-xl font-bold">
                Active Tasks
              </span>
              <ul
                className="w-full px-6 flex flex-col gap-8"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tableDone.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <li
                          key={item.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex flex-col gap-3 p-2"
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                          )}
                        >
                          <span className="text-sm font-bold text-white">
                            {' '}
                            {item.title}
                          </span>
                          <p className="text-sm font-medium text-gray-500">
                            {item.description}
                          </p>
                          <div className="flex gap-2">
                            {item.techs.map((tech) => (
                              <span
                                key={uuid()}
                                className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
