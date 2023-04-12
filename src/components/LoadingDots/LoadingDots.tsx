import Dot from "./Dot";
import * as S from "./LoadingDots.styles";

export interface LoadingDotsProps {
  color?: string;
  isFixed?: boolean;
}

const LoadingDots = ({ color, isFixed = false }: LoadingDotsProps) => {
  return (
    <S.LoadingDots $isFixed={isFixed}>
      <Dot color={color} delay={-0.32} />
      <Dot color={color} delay={-0.16} />
      <Dot color={color} />
    </S.LoadingDots>
  );
};

export default LoadingDots;
