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
