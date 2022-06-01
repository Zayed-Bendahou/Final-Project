import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import SideExplorer from './components/SideExplorer';
import axios from 'axios';
import MainExplorer from './components/MainExplorer';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState([{jobs: ['matalan']}]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:8080/api/offers')
    .then(res => {
        setData(res.data)
        console.log(data)
        setLoading(false);
    })
  }, [])
  
  return (
   <Container>
     <NavBar/>
     <Main>
       <SideExplorer data = {data}/>
        {
          loading ? <Loading /> : <MainExplorer data = {data[0].jobs} />
        }
     </Main>
   </Container> 
  );
}


export default App;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 100vw;
`;
