import Text from './Text';
import { View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { formStyles } from '../theme';

const SignInForm = ({onSubmit}) => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  })

  const initialValues =  {
    username: '',
    password: '',
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
      <Pressable style={formStyles.button} title='submit' onPress={formik.handleSubmit}>
        <Text fontWeight={'bold'}>
          Submit
        </Text>
      </Pressable>
    </View>
  )
};


export default SignInForm;