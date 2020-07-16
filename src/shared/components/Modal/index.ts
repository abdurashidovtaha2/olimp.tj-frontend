import { ModalView } from "./ModalView";
import { ModalViewProps, ModalProps } from "./model";

export const Modal: React.FC<ModalProps> = (props) => {
    const stateProps: ModalViewProps = {
        children: props.children,
    }

    if (!props.isModal) {
        return null;
    }
    return ModalView(stateProps);
}