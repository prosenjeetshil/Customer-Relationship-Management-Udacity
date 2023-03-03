import { Form } from "../Form";
import { useNewCustomer, useNewCustomerStatus } from "../hooks";

export const Create = () => {
  const { onSubmit } = useNewCustomer();
  const status = useNewCustomerStatus();
  return <Form handleSubmit={onSubmit} status={status} />;
};
