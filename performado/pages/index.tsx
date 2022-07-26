import { FormEvent, useCallback, useState } from "react"
import { ResultadosPesquisa } from "../components/resultadosPesquisa"
import Head from "../node_modules/next/head"


export default function Home() {
  const [pesquisa, setPesquisa] = useState("")
  const [resultados, setResultados] = useState([])

  const obtemPesquisa = async (event: FormEvent) => {
    event.preventDefault()

    if(!pesquisa.trim()){
      return;
    }

    const response = await fetch(`http://localhost:3333/produtos?q=${pesquisa}`)
    const data = await response.json()
    setResultados(data)
  }

  const listaDeFavoritos = useCallback(async (id: number) => {
    console.log(id)
  }, [])

  return (
    <div>
      <Head>
        <title>Performado</title>
      </Head>
      <h1>Pesquisar: </h1>

      <form onSubmit={obtemPesquisa}>
        <input type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>

      <ResultadosPesquisa resultados={resultados} listaDeFavoritos={listaDeFavoritos}/>
    </div>
  )
}

/**
 * useCallback tem a mesma função do useMemo, porém a sua necessidade é totalmente voltada para funções que devem ser memorizadas
 */
