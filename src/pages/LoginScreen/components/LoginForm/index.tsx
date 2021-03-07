import React from 'react';
import { Formik } from 'formik';
import { Content } from 'native-base';

import formValidationSchema from './formValidationSchema';

import TransparentButton from '../../../../components/TransparentButton';
import TextInput from '../../../../components/TextInput';
import { CustomView, FormContainer } from './styles';

interface FormValues {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const handleSubmitLogin = (values: FormValues): void => {
    console.log('Login values', values);
  };

  return (
    <Content>
      <CustomView>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={formValidationSchema}
          onSubmit={(values: FormValues) => handleSubmitLogin(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
            isValid,
          }) => (
            <FormContainer>
              <TextInput
                label="User"
                name="username"
                value={values.username}
                handleChange={handleChange}
                handleBlur={handleBlur}
                cleanable
                handleClean={() => setFieldValue('username', '')}
                maxLength={100}
                validationError={errors.username}
                touched={touched.username}
                autoFocus
              />
              <TextInput
                label="Password"
                name="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                hidable
                cleanable
                handleClean={() => setFieldValue('password', '')}
                maxLength={100}
                validationError={errors.password}
                touched={touched.password}
              />
              <TransparentButton
                title="Enter"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </FormContainer>
          )}
        </Formik>
      </CustomView>
    </Content>
  );
};

export default LoginForm;
