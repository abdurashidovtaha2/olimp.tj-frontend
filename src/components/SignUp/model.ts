import { FormEvent } from "react";

export interface SignUpViewProps {
    handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (evt: FormEvent) => void;
    triggerModal: (value: string | null) => void;
}

export interface SignUpProps {
    triggerModal: (value: string | null) => void;
}