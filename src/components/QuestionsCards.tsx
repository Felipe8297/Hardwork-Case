'use client'
import { useState } from 'react'

// Houve um erro de cors e não consegui acessar a API então acabei usando um mock

const responseApi = {
  ok: true,
  msg: '',
  obj: [
    {
      prova: 'ABC',
      id_questao: 123,
      questao:
        'Adolescente, 15 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:',
      alternativas: [
        { id: 1, alternativa: 'Alternativa A lorem ipsum dolor sit amet' },
        { id: 2, alternativa: 'Alternativa B lorem ipsum dolor sit amet' },
        { id: 3, alternativa: 'Alternativa C lorem ipsum dolor sit amet' },
        { id: 4, alternativa: 'Alternativa D lorem ipsum dolor sit amet' },
      ],
    },
    {
      prova: 'XYZ',
      id_questao: 456,
      questao:
        'Adolescente, 16 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:',
      alternativas: [
        { id: 1, alternativa: 'Alternativa A lorem ipsum dolor sit amet' },
        { id: 2, alternativa: 'Alternativa B lorem ipsum dolor sit amet' },
        { id: 3, alternativa: 'Alternativa C lorem ipsum dolor sit amet' },
        { id: 4, alternativa: 'Alternativa D lorem ipsum dolor sit amet' },
      ],
    },
    {
      prova: 'FGH',
      id_questao: 789,
      questao:
        'Adolescente, 17 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:',
      alternativas: [
        { id: 1, alternativa: 'Alternativa A lorem ipsum dolor sit amet' },
        { id: 2, alternativa: 'Alternativa B lorem ipsum dolor sit amet' },
        { id: 3, alternativa: 'Alternativa C lorem ipsum dolor sit amet' },
        { id: 4, alternativa: 'Alternativa D lorem ipsum dolor sit amet' },
      ],
    },
  ],
}

export function QuestionCards() {
  const questionData = responseApi.obj[0]
  const [selectedAlternative, setSelectedAlternative] = useState<number | null>(
    null,
  )

  const handleAlternativeClick = (id: number) => {
    setSelectedAlternative(id)
  }

  const handleConfirmClick = () => {
    console.log(`Resposta selecionada: ${selectedAlternative}`)
  }

  return (
    <div className="max-w-sm mx-auto mt-8 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="bg-gray-900 rounded-lg shadow-md mb-4 p-4">
          <h1 className="px-2 text-zinc-50">{questionData.questao}</h1>
        </div>
      </div>
      <div className="px-6 py-4">
        {questionData.alternativas.map((alt) => (
          <button
            key={alt.id}
            className={`bg-gray-900 rounded-lg shadow-md my-2 p-4 text-zinc-50 ${
              selectedAlternative === alt.id ? 'bg-gray-800' : ''
            }`}
            onClick={() => handleAlternativeClick(alt.id)}
          >
            <p>{`${String.fromCharCode(64 + alt.id)} - ${alt.alternativa}`}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="border border-gray-900 text-gray-900 font-bold py-2 px-4 rounded-full"
          onClick={handleConfirmClick}
          disabled={selectedAlternative === null}
        >
          Confirma resposta
        </button>
      </div>
    </div>
  )
}
