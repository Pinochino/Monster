import { Box, Grid, Paper, styled } from "@mui/material";
import React from 'react';
import CardContent from "../CardContent";
import GeneralBodyData from "./GeneralBodyData";

function GeneralBody() {

     const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: '10px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        maxWidth: '212px',
        margin: '10px',
        position: 'relative',

      }));

    return (
    <Grid spacing={1} flex='1'>
      <Grid container item  width='100%'>
        {GeneralBodyData.map((card, index) => {
            // <Grid key={index} xs={2} sm={4} md={4} >

            const isFirstItem = index === 0;
            const isLastItem = index === GeneralBodyData.length - 1;

            // console.log(card.discount)
              return (
                <Item key={index} style={{ marginLeft: isFirstItem ? '0px' : '10px', marginRight: isLastItem ? '0px' : '10px' }}>
                <CardContent 
                img={card.img}
                title={card.title}
                check={card.check}
                newText={card.newText}
                newCost={card.newCost}
                oldCost={card.oldCost}
                address={card.address}
                sold={card.sold}
                total={card.total}
                displayCartSale={card.displayCartSale}
                />
            </Item>
              )
            // </Grid>
          
})}
      </Grid>
      <Grid container item width='100%'>
        {GeneralBodyData.map((card, index) => {
            // <Grid key={index} xs={2} sm={4} md={4} >

            const isFirstItem = index === 0;
            const isLastItem = index === GeneralBodyData.length - 1;

            // console.log(card.discount)
              return (
                <Item key={index} style={{ marginLeft: isFirstItem ? '0px' : '10px', marginRight: isLastItem ? '0px' : '10px' }}>
                <CardContent 
                img={card.img}
                title={card.title}
                check={card.check}
                newText={card.newText}
                newCost={card.newCost}
                oldCost={card.oldCost}
                address={card.address}
                sold={card.sold}
                total={card.total}
                displayCartSale={card.displayCartSale}
                />
            </Item>
              )
            // </Grid>
          
})}
      </Grid>
    </Grid>  );
}

export default GeneralBody;