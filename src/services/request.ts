import axios from 'axios'

export type QuestionsResponse = {
  ok: boolean
  msg: string
  obj: {
    prova: string
    id_questao: number
    questao: string
    alternativas: {
      id: number
      alternativa: string
    }[]
  }[]
}

export const getQuestionsList = () => {
  return axios<QuestionsResponse[]>({
    method: 'GET',
    url: 'https://hardworkmedicina.com.br/exemploQuestoes.json',
  })
}
