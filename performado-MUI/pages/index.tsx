import React, { FormEvent, useCallback, useState } from "react"
import { ResultadosPesquisa } from "../components/resultadosPesquisa"
import { Button, Container, Grid, Stack, TextField, Typography } from "../node_modules/@mui/material/index"
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
    <Container maxWidth="lg">
      <Head>
        <title>Performado - MUI</title>
      </Head>

      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6">Pesquisar: </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <form onSubmit={obtemPesquisa}>
            <Stack direction="row" spacing={2}>
              <TextField size="small" type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)}/>
              <Button variant="contained" type="submit">Buscar</Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
      <ResultadosPesquisa resultados={resultados} listaDeFavoritos={listaDeFavoritos}/>
    </Container>
  )
}

/**
 * useCallback tem a mesma função do useMemo, porém a sua necessidade é totalmente voltada para funções que devem ser memorizadas
 */
