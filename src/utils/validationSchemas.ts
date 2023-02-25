import * as yup from 'yup';

export const postOfficeFormValidation = yup.object().shape({
  city: yup
    .string()
    .min(2, 'Мінімум 2 літери')
    .matches(
      /^[\u0400-\u04FF]/,
      'Місто повинно містити тільки українські літери'
    )
    .required(`Місто обов'язкове поле`),
  type: yup.string().required(`Відділення обов'язкове поле`),
});
