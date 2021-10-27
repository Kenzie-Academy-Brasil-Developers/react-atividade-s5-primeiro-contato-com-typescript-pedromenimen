import { Box } from "@material-ui/core";
import { style } from "./styles";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <Box style={style}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </Box>
  );
};

export default Card;
