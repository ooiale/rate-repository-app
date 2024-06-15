import Text from './Text';
import { View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { formStyles } from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const ReviewCreateForm = () => {

  const {createReview} = useCreateReview()

  const onSubmit = async(values, {setErrors, setSubmitting}) => {
    try {
      await createReview(values);
      //console.log('Create review success:', data);
    } catch (error) {
      setErrors({ general: error.message });
      console.error('Create review error:', error);
    } finally {
      setSubmitting(false);
    }
  }

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required('Repository owner name is required'),
    repositoryName: yup
      .string()
      .required('Repository name is required'),
    rating: yup
      .number()
      .required('Rating is required')
      .min(0, 'Rating must be at least 0 ')
      .max(100, 'Rating must be at most 100'),
    text: yup
      .string()
  })

  const initialValues =  {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })


  return (
    <View style={formStyles.container}>
      <Text fontWeight={'bold'}> Repository owner name </Text>
      <TextInput 
        style={formStyles.input}
        id='ownerName'
        name='ownerName'
        placeholder='Repository Owner Name'
        onChangeText={formik.handleChange('ownerName')}
        value={formik.values.ownerName}
      />
      {formik.touched.ownerName && formik.errors.ownerName && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.ownerName} </Text>}
      <Text fontWeight={'bold'}> Repository Name </Text>
      <TextInput 
        style={formStyles.input}
        id='repositoryName'
        name='repositoryName'
        placeholder='Repository Name'
        onChangeText={formik.handleChange('repositoryName')}
        value={formik.values.repositoryName}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.repositoryName} </Text>}
      <Text fontWeight={'bold'}> Rating </Text>
      <TextInput 
        style={formStyles.input}
        id='rating'
        name='rating'
        placeholder='Rating between 0-100'
        onChangeText={formik.handleChange('rating')}
        value={formik.values.rating}
      />
      {formik.touched.rating && formik.errors.rating && 
       <Text color={'red'} fontWeight={'bold'}> {formik.errors.rating} </Text>}
      <Text fontWeight={'bold'}> Review </Text>
      <TextInput 
        style={formStyles.input}
        id='text'
        name='text'
        placeholder='text'
        onChangeText={formik.handleChange('text')}
        value={formik.values.text}
      />
      <Pressable style={formStyles.button} title='submit' onPress={formik.handleSubmit}>
        <Text fontWeight={'bold'}>
          Create a review
        </Text>
      </Pressable>
      {formik.errors.general && (
        <Text color={'red'} fontWeight={'bold'}>{formik.errors.general}</Text>
      )}
    </View>
  )
};


export default ReviewCreateForm;