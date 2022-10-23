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
  return {
    ...state,
    form: state,
    onChange,
  };
};
