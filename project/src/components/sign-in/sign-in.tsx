import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { FormEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import cn from 'classnames';

const formFields = {
  email: 'Email address',
  password: 'Password',
};

type FieldsProps = {
  value: string;
  error: boolean;
  errorText: string;
  regex: RegExp;
};

type FormStateProps = {
  [key: string]: FieldsProps;
};

function SignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText:
        'We can’t recognize this email and password combination. Please try again.',
      regex: /.+@.+\..+/i,
    },
    password: {
      value: '',
      error: false,
      errorText:
        'password must contain upper and lower case letters and numbers ',
      regex: /([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})/,
    },
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target;
    const regExp = formState[name].regex;


    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        error: !regExp.test(value),
        value: value,
      },
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const authData = {
      login: formState.email.value,
      password: formState.password.value,
    };
    dispatch(loginAction(authData));
  };

  const isValid = Object.values(formState).some(({ error }) => error);
  const formFieldsKeys = Object.keys(formState);
  const currentError = formFieldsKeys.find((name) => formState[name].errorText);

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__message">
          {currentError && <p>{currentError}</p>}
        </div>
        {Object.entries(formFields).map(([name, label]) => (
          <div className="sign-in__fields" key={name} >
            <div
              className={cn('sign-in__field', {
                'sign-in__field--error': formState[name].error,
              })}
            >
              <input
                className="sign-in__input"
                type={name}
                placeholder={label}
                name={name}
                id={name}
                value={formState[name].value}
                onChange={handleChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor={name}>
                {label}
              </label>
            </div>
          </div>

        ))}
        <div className="sign-in__submit">
          <button
            className="sign-in__btn"
            type="submit"
            disabled={isValid}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
