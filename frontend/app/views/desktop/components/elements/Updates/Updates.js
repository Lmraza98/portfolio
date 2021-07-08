import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 100%;;
    background-color: white;
`
const GridItem1 = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;

    border: 10px solid black;
    background-color: white;

`
const Updates = () => {
    return (
        <Grid></Grid>
    )
}

export { Updates } 
