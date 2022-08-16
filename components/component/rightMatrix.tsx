import Matrix from "./Matrix";

const RightMatrix = (props:any) => {
  const abc = (ss:any) => {
    props.rightN(ss);
  }

  return <Matrix right={abc} here={'right'}/>
}

export default RightMatrix;