import * as yup from 'yup';
import { FormValidationEnum } from '../../../../enums';

export default yup.object().shape({
  username: yup.string().required(FormValidationEnum.REQUIRED_FIELD_IS_EMPTY),
  password: yup.string().required(FormValidationEnum.REQUIRED_FIELD_IS_EMPTY),
});
