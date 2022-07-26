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
        <div>
            <h2>{precoTotal}</h2>
            {resultados.map(produto => {
                return(
                    <ItemPorProduto key={produto.id} produto={produto} listaDeFavoritos={listaDeFavoritos}/>
                )
                })}
        </div>
    )
}