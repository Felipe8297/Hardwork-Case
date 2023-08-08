'use client'
import { Header } from '@/components/Header'
import {
  AiOutlineArrowLeft,
  AiFillReconciliation,
  AiFillTool,
  AiFillQuestionCircle,
} from 'react-icons/ai'

import { QuestionCards } from '@/components/QuestionsCards'
import { useRouter } from 'next/navigation'

export default function Questions() {
  const router = useRouter()
  return (
    <div className="bg-black h-screen">
      <Header />

      <div className="max-w-sm mx-auto mt-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 flex justify-between">
          <div className="flex items-center">
            <button
              className=" bg-gray-900 rounded-full px-2 flex gap-1 justify-center items-center text-zinc-100 text-sm"
              onClick={() => router.push('/')}
            >
              <AiOutlineArrowLeft className="text-white " />
              Voltar
            </button>
          </div>
          <div className="flex items-center gap-1 ">
            <AiFillReconciliation className="text-black text-xl" />
            <h1 className="text-lg font-bold ">QUESTÕES</h1>
          </div>
        </div>
        <div className="flex justify-end mt-2 gap-1">
          <button className="border border-white rounded-md p-1">
            <AiFillTool className="text-white text-2xl" />
          </button>
          <button className="border border-white rounded-md p-1">
            <AiFillQuestionCircle className="text-white text-2xl" />
          </button>
        </div>
        <div className="max-w-sm mx-auto mt-8">
          <QuestionCards />
        </div>
      </div>
    </div>
  )
}
