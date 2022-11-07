import {useState} from 'react';
//<T extends Object> es un genérico
export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);
  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const setFormValue = (form: T) => {
    setState({...state, ...form});
  };
  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};
