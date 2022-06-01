import React from 'react';
import styled from 'styled-components';


export default function JobSlot(props) {
    return (
        <Container>
            <h1>{props.title}</h1>
        </Container>
    )
}


const Container = styled.div`
   
    height: 70px;
    text-align: start;
`;