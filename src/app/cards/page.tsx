'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schemaForm = z.object({
  title: z.string().nonempty('O titulo é obrigatório'),
  description: z.string().nonempty('A descrição é obrigatório'),
  techs: z
    .array(
      z.object({
        name: z.string().nonempty('O nome é obrigatório'),
      }),
    )
    .min(2, 'Insira pelo menos 2 palavras-chave'),
})

type FormProps = z.infer<typeof schemaForm>

export default function AddCards() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormProps>({
    resolver: zodResolver(schemaForm),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs',
  })

  function addNewTech() {
    append({
      name: '',
    })
  }

  const handleForm = (data: FormProps) => {
    console.log(data)
  }

  return (
    <div className="bg-black-800 w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-700 px-8 py-8 rounded-md flex flex-col gap-8">
        <h1 className="text-white text-3xl font-bold leading-10 ">
          Adicionar Cards
        </h1>

        <form
          onSubmit={handleSubmit(handleForm)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
              Titulo
            </label>
            <input
              type="text"
              className="text-white text-base leading-4 bg-black-800 px-6 py-3 rounded placeholder:text-gray-600 focus:outline-purple-700 outline-none"
              placeholder="Seu Titulo"
              {...register('title')}
            />
            {errors.title && (
              <span className="text-sm text-red-500">
                {errors.title?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-white">
              Descrição
            </label>
            <textarea
              className="text-white text-base leading-4 bg-black-800 px-5 py-3 rounded placeholder:text-gray-600 focus:outline-none focus:outline-purple-700 "
              placeholder="Informe sua descrição"
              {...register('description')}
            ></textarea>
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="flex items-center justify-between text-white"
            >
              Palavras-chave
              <button
                type="button"
                className="text-purple-700 text-sm"
                onClick={addNewTech}
              >
                Adicionar
              </button>
            </label>

            {fields.map((field, index) => {
              return (
                <div key={field.id} className="flex flex-col gap-1">
                  <input
                    type="text"
                    className="text-white text-base leading-4 bg-black-800 px-6 py-3 rounded placeholder:text-gray-600 focus:outline-purple-700 outline-none"
                    {...register(`techs.${index}.name`)}
                  />
                  {errors.techs?.[index]?.name && (
                    <span className="text-sm text-red-500">
                      {errors.techs?.[index]?.name?.message}
                    </span>
                  )}
                </div>
              )
            })}
            {errors.techs && (
              <span className="text-sm text-red-500">
                {errors.techs?.message}
              </span>
            )}
          </div>

          <button className="bg-purple-700 text-white px-8 py-3 rounded">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  )
}
