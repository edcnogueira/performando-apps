import { memo } from "react";
import { Button, Grid, Typography } from "../node_modules/@mui/material/index";

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
        <Grid container sx={{mt: 1}}>
            <Grid item xs={12} sm={2}>
                <Typography variiant="p">{produto.titulo} - <strong>{produto.preco}</strong></Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={() => listaDeFavoritos(produto.id)}>Adicionar aos favoritos</Button>
            </Grid>
        </Grid>
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