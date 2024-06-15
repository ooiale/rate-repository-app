import useSignIn from '../hooks/useSignIn';

import SignInForm from './SignInForm';

const SignIn = () => {
  const {signIn} = useSignIn()

  const onSubmit = async(values) => {
    try {
      await signIn(values);
      //console.log('Login success:', data);
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  return (
    <SignInForm onSubmit={onSubmit}/>
  )
};


export default SignIn;