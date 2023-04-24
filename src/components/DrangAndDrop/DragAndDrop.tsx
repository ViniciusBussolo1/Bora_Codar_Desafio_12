'use client'

import { useState } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'

interface tableProps {
  id: string
  p: string
  title: string
}

const items = [
  {
    id: '1',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
  {
    id: '2',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
  {
    id: '3',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
  {
    id: '4',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
  {
    id: '5',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
  {
    id: '6',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
  {
    id: '7',
    title: '#boraCodar um Kanban 🧑‍💻',
    p: 'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
  },
]

export default function DragAndDrop() {
  const [tableToDo, updateTableToDo] = useState(items)
  const [tableDoing, updateTableDoing] = useState<Array<tableProps>>([])
  const [tableDone, updateTableDone] = useState<Array<tableProps>>([])

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
    const toDo = tableToDo
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

    updateTableToDo(toDo)
    updateTableDoing(doing)
    updateTableDone(done)
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
              <span className="text-purple-700 text-xl font-bold">A fazer</span>
              <ul
                className="w-full px-6 flex flex-col gap-8"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tableToDo.map((item, index) => {
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
                            {item.p}
                          </p>
                          <div className="flex gap-2">
                            <span className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700">
                              rocketseat
                            </span>
                            <span className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700">
                              desafio
                            </span>
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
                            {item.p}
                          </p>
                          <div className="flex gap-2">
                            <span className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700">
                              rocketseat
                            </span>
                            <span className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700">
                              desafio
                            </span>
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
                            {item.p}
                          </p>
                          <div className="flex gap-2">
                            <span className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700">
                              rocketseat
                            </span>
                            <span className="bg-[#E2D6FF] py-1 px-2 rounded-lg text-xs text-purple-700">
                              desafio
                            </span>
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
