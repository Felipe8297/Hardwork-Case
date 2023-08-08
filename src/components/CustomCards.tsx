'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { AiOutlineArrowLeft, AiFillControl } from 'react-icons/ai'
import * as Switch from '@radix-ui/react-switch'
import { useRouter } from 'next/navigation'

const options = [
  'Todos',
  'Epidemias',
  'Gestão em saúde',
  'HIV',
  'Abdome agudo obstrutivo',
  'Tumores abdominais na infância',
]
const optionsValue = [
  'Todos',
  'ABC',
  'AMRIGS',
  'USP',
  'ENARE',
  'SUS-SP',
  'UNICAMP, UNIFESP',
]

export function CustomScreenCard() {
  const router = useRouter()
  const [sliderValue, setSliderValue] = useState(0)
  const [selectedOption, setSelectedOption] = useState('Todos')

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value)
  }

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="bg-black h-screen">
      <Header />

      <div className="max-w-sm mx-auto mt-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 flex justify-between">
          <div className="flex items-center">
            <button
              className=" bg-gray-900 rounded-full px-2 flex gap-1 justify-center items-center text-zinc-100 text-sm"
              onClick={() => router.push('/questions')}
            >
              <AiOutlineArrowLeft className="text-white" />
              Voltar
            </button>
          </div>
          <div className="flex items-center gap-1">
            <AiFillControl className="text-black text-xl" />
            <h1 className="text-lg font-bold">Personalizar</h1>
          </div>
        </div>

        {/* Definir meta diária de questões */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 mt-4">
          <p className="text-lg font-bold mb-2">
            Definir meta diária de questões
          </p>
          <div className="flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full mr-2"
            />
            <span className="text-black">{sliderValue}</span>
          </div>
        </div>

        {/*    */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 mt-4">
          <p className="text-lg font-bold mb-2">Questões por Grandes áreas</p>
          <div>
            <div className="flex items-center mb-2 justify-between border border-gray-900 p-1 rounded-lg">
              <span className="mr-2 font-bold">Clínica médica</span>
              <Switch.Root
                className="w-[42px] h-[25px] bg-slate-400 rounded-full relative  data-[state=checked]:bg-green-500 outline-none cursor-default"
                id="airplane-mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
            <div className="flex items-center mb-2 justify-between border border-gray-900 p-1 rounded-lg ">
              <span className="mr-2 font-bold">Cirurgia Geral</span>
              <Switch.Root
                className="w-[42px] h-[25px] bg-slate-400 rounded-full relative  data-[state=checked]:bg-green-500 outline-none cursor-default"
                id="airplane-mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
            <div className="flex items-center mb-2 justify-between border border-gray-900 p-1 rounded-lg">
              <span className="mr-2 font-bold font-bold">Pediatria</span>
              <Switch.Root
                className="w-[42px] h-[25px] bg-slate-400 rounded-full relative  data-[state=checked]:bg-green-500 outline-none cursor-default"
                id="airplane-mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
            <div className="flex items-center mb-2 justify-between border border-gray-900 p-1 rounded-lg">
              <span className="mr-2 font-bold">Ginecologia e obstetrícia</span>
              <Switch.Root
                className="w-[42px] h-[25px] bg-slate-400 rounded-full relative  data-[state=checked]:bg-green-500 outline-none cursor-default"
                id="airplane-mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
            <div className="flex items-center mb-2 justify-between border border-gray-900 p-1 rounded-lg">
              <span className="mr-2 font-bold">Medicina preventiva</span>
              <Switch.Root
                className="w-[42px] h-[25px] bg-slate-400 rounded-full relative  data-[state=checked]:bg-green-500 outline-none cursor-default"
                id="airplane-mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
          </div>
        </div>
        {/* Questões de provas específicas */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 mt-4">
          <p className="text-lg font-bold mb-2">
            Questões de provas específicas
          </p>
          <div>
            <p className="mb-2 font-bold">Busque provas:</p>
            <select
              value={selectedOption}
              onChange={handleOptionSelect}
              className="w-full border rounded px-4 py-2"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Questões de temas específicos */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 mt-4">
          <p className="text-lg font-bold mb-2">
            Questões de temas específicos
          </p>
          <div>
            <p className="mb-2 font-bold">Busque temas:</p>
            <select
              value={selectedOption}
              onChange={handleOptionSelect}
              className="w-full border rounded px-4 py-2"
            >
              {optionsValue.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          <button className="bg-zinc-100 mt-4 text-gray-900 py-2 px-4 rounded-full w-44 font-bold">
            Começar
          </button>
        </div>
      </div>
    </div>
  )
}
