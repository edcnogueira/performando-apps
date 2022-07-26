import { useMemo } from "react";
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

/**
 * useMemo - 
 * 1 - Evita que cálculos pesados sejam feitos de maneira desnecessária 
 * 2 - Quando uma informação é repassada para mais de um componente (evita armazenar na memória mais de uma vez).
 */