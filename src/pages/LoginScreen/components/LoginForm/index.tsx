import React from 'react';
import { Formik } from 'formik';
import { Content } from 'native-base';

import LoginFormValues from '../../../../@types/loginFormValues';
import { useAuth } from '../../../../hooks/auth';
import formValidationSchema from './formValidationSchema';

import TransparentButton from '../../../../components/TransparentButton';
import TextInput from '../../../../components/TextInput';
import { CustomView, FormContainer } from './styles';

const LoginForm: React.FC = () => {
  const { login } = useAuth();

  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  };

  const handleSubmitLogin = (values: LoginFormValues): void => {
    login(values);
  };

  return (
    <Content>
      <CustomView>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={formValidationSchema}
          onSubmit={(values: LoginFormValues) => handleSubmitLogin(values)}
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
