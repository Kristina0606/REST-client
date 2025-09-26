import type { FieldArrayWithId, UseFormRegister } from 'react-hook-form';

export interface FormValues {
  firstname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface URLFormValues {
  method: string;
  urlRequest: string;
}

export interface UserState {
  name: string | null;
  email: string | null;
  token: string | null;
  id: string | null;
}

export interface RequestState {
  methodsList: string[];
  method: string;
  urlRequest: string | null;
}

export interface EditorState {
  editor: string;
}

export interface signInData {
  email: string;
  password: string;
}

export interface SignUpFormProps {
  handleclick: (firstname: string, email: string, password: string) => void;
}

export interface SignInFormProps {
  isErrorUser: boolean;
  handleclick: (email: string, password: string) => void;
}

export type Param = { key: string; value: string };
export type ParamFormValues = { params: Param[] };

export interface ParamsRowProps {
  register: UseFormRegister<ParamFormValues>;
  append: (value: Param) => void;
  remove: (index?: number) => void;
  field: FieldArrayWithId<ParamFormValues, 'params', 'id'>;
  index: number;
}
