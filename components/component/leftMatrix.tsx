import Matrix from "./Matrix";

const LeftMatrix = (props:any) => {
  const abc = (ss:any) => {
    props.leftN(ss);
  }

  return <Matrix left={abc} here={'left'}/>
}

export default LeftMatrix;