import Confetti from 'react-confetti';
import useWindowSize from "react-use/lib/useWindowSize";

const DisplayConfetti = () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export default DisplayConfetti