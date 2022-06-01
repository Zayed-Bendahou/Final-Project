import React from 'react';
import styled from 'styled-components';


export default function SideCompo(props) {
    return(
        <Container>
            <Title>
                {props.title}
            </Title>
        </Container>
    )
}

const Container = styled.div`
    height: 200px;
    width: 100%;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 27px;
`;