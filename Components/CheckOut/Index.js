import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { FormLabel } from '@chakra-ui/form-control';
import ErrMsg from './ErrorMessage'
import {
    CheckOutContainer,
    FormContainer,
    FormControl,
    Button,
} from './CheckOutElement'
import './Form.css'

const initialValues= {
    name : '',
    adress : '',
    city :'',
    note : ''
}

const validationSchema = Yup.object({
    name : Yup.string().required('this field is required'),
    adress : Yup.string().required('this field is required'),
    city : Yup.string().required('this field is required'),
    note : Yup.string().required('this field is required'),
})

const onSubmit = (e) => {
    e.preventDefault();
    alert('Order Received! searching for driver...')
    alert('Driver Located! Preparing Dishes')
    alert('Dishes Ready! sending to your location. please wait for approx 30 minutes')
}   

const Index = () => {
    return (
        <CheckOutContainer>
           <FormContainer>
               <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmit}
               >
                   {
                       formik => {
                           return (
                               <Form>
                                   <FormControl>
                                   <FormLabel htmlFor='name'>Full Name</FormLabel>
                                   <Field 
                                   id='name'
                                   name='name'
                                   type='text'
                                   className='FieldInput'
                                   />
                                   <ErrorMessage name='name' component={ErrMsg} />
                                   </FormControl>
                                   <FormControl>
                                   <FormLabel htmlFor='adress'>Adress</FormLabel>
                                   <Field 
                                   id='adress'
                                   name='adress'
                                   as='textarea'
                                   className='AreaInput'
                                   />
                                   <ErrorMessage name='adress' component={ErrMsg} />
                                   </FormControl>
                                   <FormControl>
                                   <FormLabel htmlFor='city'>City</FormLabel>
                                   <Field 
                                   id='city'
                                   name='city'
                                   type='text'
                                   className='FieldInput'
                                   />
                                   <ErrorMessage name='city' component={ErrMsg} />
                                   </FormControl>
                                   <FormControl>
                                   <FormLabel htmlFor='note'>Additional Note</FormLabel>
                                   <Field 
                                   id='note'
                                   name='note'
                                   type='text'
                                   as='textarea'
                                   className='AreaInput'
                                   />
                                   <ErrorMessage name='note' component={ErrMsg} />
                                   </FormControl>
                                   <Button type='submit'onClick={onSubmit} disabled={!(formik.dirty && formik.isValid)}>Order Now!</Button>
                               </Form>
                           )
                       }
                   }
               </Formik>
           </FormContainer>
        </CheckOutContainer>
    )
}

export default Index
