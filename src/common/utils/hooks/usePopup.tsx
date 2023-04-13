import { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import { Popup } from "../../../components/Popup/Popup";

type ShowProps = {
  content: ReactNode;
};

export interface PopupHookProps {
  show: ({ content }: ShowProps) => void;
}

export default function usePopup(props?: PopupHookProps) {
  const show = ({ content }: ShowProps) => {
    ReactDOM.render(<Popup {...props} content={content} />, document.getElementById("popup"));
  };

  const memoShow = useRef(show);

  return {
    show: memoShow.current,
  };
}
