import useSignUp from '../hooks/useSignUp';

import SignUpForm from './SignUpForm';

import useSignIn from '../hooks/useSignIn';


const SignUp = () => {
  const {signUp} = useSignUp()
  const {signIn} = useSignIn()

  const onSubmit = async(values) => {
    try {
      await signUp(values);
      //console.log('Registration success:', data);
      try {
        await signIn(values);
        //console.log('Login success:', data);
      } catch (error) {
        console.error('Login error:', error);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  }
  return (
    <SignUpForm onSubmit={onSubmit}/>
  )
};


export default SignUp;