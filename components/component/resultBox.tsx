import { Button, Box } from "@chakra-ui/react";
import CreateList from "./createList";

const ResultBox = (props:any) => {

  const onClick = () => {
    console.log(props.first);
    console.log(props.second);
  }

  return (
    <Box>
      <Button tabIndex={3} onClick={onClick}>Plus</Button>
    </Box>
  )
}

export default ResultBox;