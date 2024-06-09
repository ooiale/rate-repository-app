import Text from './Text';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const {signIn} = useSignIn()
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async(values) => {
      try {
        const data = await signIn(values);
        console.log('Login success:', data);
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    validationSchema
})
  return (
    <View style={styles.container}>
      <Text fontWeight={'bold'}> Username </Text>
      <TextInput 
        style={styles.input}
        id='username'
        name='username'
        placeholder='Username'
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.username} </Text>}
      <Text fontWeight={'bold'}> Password </Text>
      <TextInput 
        style={styles.input}
        id='password'
        name='password'
        placeholder='Password'
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.password} </Text>}
      <Pressable style={styles.button} title='submit' onPress={formik.handleSubmit}>
        <Text fontWeight={'bold'}>
          Submit
        </Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginBottom: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 0,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
});

export default SignIn;