import { Grid } from "../node_modules/@mui/material/index";
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
    const precoTotal = resultados.reduce((total, produto) => {
        return total + produto.preco;
    }, 0)

    return(
        <Grid container>
            <Grid item xs={12} sm={12}>
                <h2>{precoTotal}</h2>
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