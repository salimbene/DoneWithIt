import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri) => {
    console.log('FormImagePicker.js handleAdd');
    console.log({ uri });
    console.log({ name });
    setFieldValue(name, [...imageUris, uri]);
    console.log({ imageUris });
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
