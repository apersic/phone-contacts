import { useRef } from 'react';
import ReactDOM from 'react-dom';
import Toast from '../../../components/Toast/Toast';

type ShowProps = {
    message: string;
    severity: "info" | "error" | undefined;
    wait: number;
};

export interface ToastHookProps {
    show: ({ message, severity, wait }: ShowProps) => void;
}

export default function useToast(props?: ToastHookProps) {
    const show = ({ message, severity, wait }: ShowProps) => {
        ReactDOM.render(
            <Toast {...props} message={message} severity={severity} />,
            document.getElementById('toast'),
        );

        (async () => {
            await unMountToast(wait);
        })();
    };

    async function unMountToast(wait?: number | null) {
        await new Promise(() =>
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(document.getElementById('toast') as Element);
            }, wait || 0),
        );
    }

    const memoShow = useRef(show);

    return {
        show: memoShow.current,
    };
}

export async function showToast(wait: number, message: string) {
    ReactDOM.render(
        <Toast message={message} severity='error' />,
        document.getElementById('toast'),
    );

    await new Promise(() =>
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(document.getElementById('toast') as Element);
        }, wait),
    );
}
