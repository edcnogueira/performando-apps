interface ItemPorProdutoProps {
    produto: {
        id: number;
        preco: number;
        titulo: string;
    }
    listaDeFavoritos: (id: number) => void
}

export function ItemPorProduto({ produto, listaDeFavoritos }: ItemPorProdutoProps){
    return(
        <div>
            {produto.titulo} - <strong>{produto.preco}</strong>
            <button onClick={() => listaDeFavoritos(produto.id)}>Adicionar aos favoritos</button>
        </div>
    )
}