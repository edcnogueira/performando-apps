import { Button, Grid, Stack, Typography } from "../node_modules/@mui/material/index";

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
        <Grid container sx={{mt: 1}}>
            <Grid item xs={12} sm={2}>
                <Typography variant="p">{produto.titulo} - <strong>{produto.preco}</strong></Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button variant="outlined" size="small" onClick={() => listaDeFavoritos(produto.id)}>Adicionar aos favoritos</Button>
            </Grid>
        </Grid>
    )
}