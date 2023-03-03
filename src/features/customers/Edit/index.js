import { Form } from "../Form";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../hooks";

export const Edit = () => {
  const { params } = useRoute();
  const { customerID } = params;
  const { onSubmit, status } = useEditCustomer(customerID);

  return (
    <Form handleSubmit={onSubmit} customerID={customerID} status={status} />
  );
};
