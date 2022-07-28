import { useMemo } from "react";
import { Grid, Typography } from "../node_modules/@mui/material/index";
import { ItemPorProduto } from "./itemPorProduto";

interface ResultadosPesquisaProps {
    resultados: Array<{
        id: number;
        preco: number;
        titulo: string;
    }>
    listaDeFavoritos: (id: number) => void
}

export function ResultadosPesquisa({resultados, listaDeFavoritos}: ResultadosPesquisaProps){
    const precoTotal = useMemo(() => {
        return resultados.reduce((total, produto) => {
            return total + produto.preco;
        }, 0)
    }, [resultados])

    return(
        <Grid container>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6">{precoTotal}</Typography>   
            </Grid>
            <Grid item xs={12} sm={12}>
                {resultados.map(produto => {
                    return(
                        <ItemPorProduto key={produto.id} produto={produto} listaDeFavoritos={listaDeFavoritos}/>
                    )
                    })}
            </Grid>
        </Grid>
    )
}

/**
 * useMemo - 
 * 1 - Evita que cálculos pesados sejam feitos de maneira desnecessária 
 * 2 - Quando uma informação é repassada para mais de um componente (evita armazenar na memória mais de uma vez).
 */