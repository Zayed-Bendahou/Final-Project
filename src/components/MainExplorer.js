import React from 'react'
import styled from 'styled-components'
import JobSlot from './JobSlot';
import { v4 as uuidv4 } from 'uuid';

export default function MainExplorer(props) {
    return(
        <Container>
            {
                props.data.map(job => {
                    return <JobSlot key={uuidv4()} title = {job.drug_name} />;
                })
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: scroll;
    max-width: 85%;
`;