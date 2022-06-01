import React from 'react'
import SideCompo from './SideCompo';
import styled from 'styled-components';
import {connect} from 'react-redux';


export default function SideExplorer(props) {
    return(
        <Container>
            {
                props.data.map(val => {
                    return <SideCompo key={val._id} title={val.title}/>
                })
            }
        </Container>
    )
}


const Container = styled.div`
    height: calc(100vh - 100px);
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
`;