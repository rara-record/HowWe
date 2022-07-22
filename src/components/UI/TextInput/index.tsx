import styled from 'styled-components';

const VALIDATOR = {
  email: {
    required: { value: true, message: '이메일을 입력해 주세요' },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '올바른 이메일형식을 입력해주세요',
    },
  },
  password: {
    required: { value: true, message: '비밀번호를 입력해 주세요' },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
      message:
        '비밀번호는 문자 숫자 특수문자 조합으로 8자 이상으로 입력해주세요',
    },
  },
};

interface Props {
  register: any;
  name: any;
  placeholder?: any;
  type: any;
  isError: any;
}

const TextInput = ({ register, name, placeholder, type, isError }: Props) => {
  return (
    <Input
      type={type}
      isError={isError}
      {...register(name, VALIDATOR[name])}
      placeholder={placeholder}
    />
  );
};

const Input = styled.input.attrs(p => ({ placeholder: p.placeholder }))<{
  isError: boolean;
}>`
  width: 100%;
  background-color: transparent;
  font-size: 0.75rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.2s;

  &::placeholder {
    font-size: 0.8rem;
    color: #ccc;
  }
`;

export default TextInput;
