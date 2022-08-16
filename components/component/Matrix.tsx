import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import CreateList from './createList';
interface NumberType {
  firstNumber: number | undefined;
  secondNumber: number | undefined;
}

const Matrix = (props:any) => {

  const [number, setNumber] = useState<NumberType>({
    firstNumber : undefined,
    secondNumber : undefined
  });

  const {firstNumber, secondNumber} = number;

  const onNumberChange = (e:any) => {
    const { value, name } = e.target; 
    if(value > 10) {
      return;
    }
    setNumber({ ...number, [name]: value });
  };

  const propsNumber = (aa:any) => {
    if(props.here === 'left') {
      props.left(aa);
    }else {
      props.right(aa);
    }
  }
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box display={'flex'} justifyContent={'center'}>
        <label style={{ marginRight: 5, fontSize: 25}}>
          <Input tabIndex={1} borderColor={'black'} width={55} name='firstNumber' textAlign={'right'} type="number" value={firstNumber || ''} onChange={onNumberChange} />
          <span style={{display:'inline-block', paddingLeft:5}}>행</span>
        </label>
        <label style={{ marginRight: 5, fontSize: 25}}>
          <Input tabIndex={1} width={55} borderColor={'black'} name='secondNumber' type="number" textAlign={'right'} value={secondNumber || ''} onChange={onNumberChange} />
          <span style={{display:'inline-block' ,paddingLeft:5}}>열</span>
        </label>
      </Box>
      <CreateList numbers={number} resultNum={propsNumber} />
    </Box>
  )
}

export default Matrix;