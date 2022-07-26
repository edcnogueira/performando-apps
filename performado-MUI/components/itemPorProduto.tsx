import { memo } from "react";

interface ItemPorProdutoProps {
    produto: {
        id: number;
        preco: number;
        titulo: string;
    }

    listaDeFavoritos: (id: number) => void
}

function ItemPorProdutoComponente({ produto, listaDeFavoritos }: ItemPorProdutoProps){
    return(
        <div>
            {produto.titulo} - <strong>{produto.preco}</strong>
            <button onClick={() => listaDeFavoritos(produto.id)}>Adicionar aos favoritos</button>
        </div>
    )
}

export const ItemPorProduto = memo(ItemPorProdutoComponente, (prevProps, nextProps) => {
    return Object.is(prevProps.produto, nextProps.produto)
})

/*
* Memo - Dependendo da situação, não vale apena utilizar o memo porque pode gerar mais custo.

1 - Componenete funcional puro - componenetes que retorna sempre o mesmo html inpdependente de suas propriedes.
2 - Componenetes que renderizam demais (grandes demais).
3 - Re-render com as mesmas props sem necessidade.
4 - Maior performance em componenetes que realmente são grandes ou minimamente médios.
*/