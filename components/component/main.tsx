
import Header from './header';
import LeftMatrix from './leftMatrix';
import RightMatrix from './rightMatrix';
import { Box } from '@chakra-ui/react';
import ResultBox from './resultBox';
import { useState } from 'react';

const Main = () => {
  const [fsMatrix, setFsMatrix] = useState();
  const [snMatrix, setSnMatrix] = useState();
  const aa = (zz:any) => {
    setFsMatrix(zz);
  }
  const bb = (zz:any) => {
    setSnMatrix(zz);
  }
  
  return (
    <Box>
      <Header />
      <Box w='100%' p={4} color='black' display={'flex'} justifyContent={'space-around'}>
        <LeftMatrix leftN={aa}/>
        <RightMatrix rightN={bb} />
      </Box>
      <ResultBox first={fsMatrix} second={snMatrix} />
    </Box>
  )
}

export default Main