'use client'
import { Cards } from '@/components/Cards'
import { Header } from '@/components/Header'
import { useRouter } from 'next/navigation'
import {
  AiFillReconciliation,
  AiFillControl,
  AiFillSignal,
  AiFillGitlab,
} from 'react-icons/ai'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="bg-black h-screen">
      <Header />
      <Cards
        icon={AiFillReconciliation}
        title="QUESTÕES"
        subtitle="Prepare-se de forma personalizada respondendo ao banco de questões!"
        buttonText="Começar"
        onClick={() => router.push('/questions')}
      />
      <Cards
        title="PERSONALIZAR"
        buttonText="Acessar"
        icon={AiFillControl}
        onClick={() => router.push('/customize')}
      />
      <Cards title="MÉTRICAS" buttonText="Acessar" icon={AiFillSignal} />
      <Cards
        icon={AiFillGitlab}
        title="CHATBOT"
        subtitle="Treine através de um trívias geradas pelo nosso chatbot do telegram"
        buttonText="Começar"
      />
    </div>
  )
}
