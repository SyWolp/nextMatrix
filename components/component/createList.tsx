import { Box, Button, Input, Grid, GridItem } from "@chakra-ui/react";
import { useState, useRef } from "react";

const CreateList = (props: any) => {

  const [result, setResult] = useState<any>([]);
  const fn = props.numbers.firstNumber;
  const sn = props.numbers.secondNumber;
  let [size, setSize] = useState<undefined | number>(undefined);

  const onClick = (e: any) => {
    if (result) {
      setResult([]);
    }
    setSize(sn);
    const resultBox = [];
    if (e.target.innerHTML === '초기화') {
      setResult([]);
    } else {
      for (let i = 0; i < parseInt(fn) * parseInt(sn); i++) {
        if (e.target.innerHTML === '랜덤 생성') {
          resultBox.push(Math.floor((Math.random() * (99 - (-99))) + (-99)));
        } else if (e.target.innerHTML === '직접 생성') {
          resultBox.push("");
        }
      }
      props.resultNum([...resultBox]);
      setResult([...resultBox]);
    }
  };

  const valueChange = (e: any, id: any) => {
    const changeArr = [...result];
    console.log(id);
    if (e.target.value > 99 || e.target.value < -99) {
      return;
    } else {
      changeArr[id] = e.target.value;
      setResult([...changeArr]);
    }
  };

  return (
    <Box display={'flex'} flexDirection="column" mt={5}>
      <Box justifyContent={'center'} display={'flex'}>
        <Button tabIndex={2} onClick={onClick} width={100} >
          직접 생성
        </Button>
        <Button tabIndex={2} onClick={onClick} ml={5} width={100}>
          랜덤 생성
        </Button>
        <Button tabIndex={2} onClick={onClick} ml={5} width={100}>
          초기화
        </Button>
      </Box>
      <Grid templateColumns={`repeat(${size}, 1fr)`} gap={3} mt={5} justifyItems={'center'} >
        {
          result.map((v: any, index: any) => {
            return (
              <GridItem key={index} >
                <Input type={'number'} value={v} width={50} textAlign={'right'} padding={2.5} onChange={(e) => valueChange(e, index)} />
              </GridItem>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default CreateList;