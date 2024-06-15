import Text from './Text';
import { View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { formStyles } from '../theme';

const SignUpForm = ({onSubmit}) => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required')
      .min(5, 'username length must be at least 5 characters long')
      .max(30, 'username must be at most 30 chars long'),
    password: yup
      .string()
      .required('Password is required')
      .min(5, 'password length must be at least 5 characters long')
      .max(50, 'password must be at most 50 chars long'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required')
  })

  const initialValues =  {
    username: '',
    password: '',
    confirmPassword: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
})
  return (
    <View style={formStyles.container}>
      <Text fontWeight={'bold'}> Username </Text>
      <TextInput 
        style={formStyles.input}
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
        style={formStyles.input}
        id='password'
        name='password'
        placeholder='Password'
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.password} </Text>}
      <Text fontWeight={'bold'}> Confirm Password </Text>
      <TextInput 
        style={formStyles.input}
        id='confirmPassword'
        name='confirmPassword'
        placeholder='Confirm passwod'
        onChangeText={formik.handleChange('confirmPassword')}
        value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.confirmPassword} </Text>}
      <Pressable style={formStyles.button} title='submit' onPress={formik.handleSubmit}>
        <Text fontWeight={'bold'}>
          Submit
        </Text>
      </Pressable>
    </View>
  )
};


export default SignUpForm;