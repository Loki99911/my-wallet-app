import React from "react";
import { Formik } from "formik";
import shortid from "shortid";
import {
  FormLayout,
  Form,
  LoginLabel,
  LoginInput,
  ErrorText,
} from "./TransferForm.styled";
import MainButton from "../MainButton/MainButton";
import { Spinner } from "../Spinner/Spinner";

const TransferForm = ({ sendEthereum, account, loader }) => {
  const addressID = shortid.generate();
  const quantityID = shortid.generate();

  const isEthereumQuantityValid = (quantity) => {
    const ethereumMultiple = 1e18;
    if (
      typeof quantity !== "number" ||
      quantity < 0.000001 ||
      quantity > 100000
    ) {
      return false;
    }

    return (
      Number.isInteger(quantity * ethereumMultiple) &&
      (quantity * 1000000) % 10 === 0
    );
  };

  return (
    <FormLayout>
      <Formik
        initialValues={{ address: "", quantity: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.address) {
            errors.address = "This is a required field";
          } else if (!/^0x[0-9A-Fa-f]{40}$/.test(values.address)) {
            errors.address = "Invalid Ethereum wallet address";
          }
          if (!values.quantity) {
            errors.quantity = "This is a required field";
          } else if (!isEthereumQuantityValid(parseFloat(values.quantity))) {
            errors.quantity = "Invalid Ethereum quantity";
          }
          return errors;
        }}
        onSubmit={(value, { resetForm }) => {
          sendEthereum(value);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <LoginLabel htmlFor={addressID}>Wallet address:</LoginLabel>
            <LoginInput
              type="address"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              id={addressID}
              placeholder="0x..."
              pattern="^0x[0-9A-Fa-f]{40}$"
            />
            <ErrorText>
              {errors.address && touched.address && errors.address}
            </ErrorText>
            <LoginLabel htmlFor={quantityID}>Quantity:</LoginLabel>
            <LoginInput
              type="quantity"
              name="quantity"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quantity}
              id={quantityID}
              placeholder="0.00"
            />
            <ErrorText>
              {errors.quantity && touched.quantity && errors.quantity}
            </ErrorText>
            <MainButton
              type="submit"
              disabled={Object.keys(errors).length > 0 || account === ""}
            >
              {loader ? <Spinner /> : "Confirm"}
            </MainButton>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default TransferForm;
