import { InputField } from "../InputField/InputField";
import * as S from "./Card.styles";

export interface CardProps {
    questionId: string,
    questionType: string,
    label: string,
    required: boolean,
    attributes: Object | null,
    onChange: (e: any) => void,
    error?: string | undefined,
}

const Card = ({ questionId, questionType, label, required, attributes, onChange, error }: CardProps) => {
    const getInputType = () => {
        if (questionType === "rating") {
            return "number";
        }

        return questionType;
    }

    return (
        <S.Card>
            <S.CardText>{label}</S.CardText>
            <InputField inputId={questionId} type={getInputType()} {...attributes} onChange={onChange} error={error} />
        </S.Card>
    );
}

export default Card;