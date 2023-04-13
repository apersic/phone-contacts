import * as S from "./LoadingDots.styles";

export interface DotProps {
  color?: string;
  delay?: number;
}

const Dot = ({ color = "#2F78CA", delay }: DotProps) => {
  return (
    <S.Dot>
      <S.OuterDot $color={color} $delay={delay}></S.OuterDot>
      <S.InnerDot $color={color}></S.InnerDot>
    </S.Dot>
  );
};

export default Dot;
