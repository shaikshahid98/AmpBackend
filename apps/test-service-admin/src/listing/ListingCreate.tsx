import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="locationtype" source="locationtype" />
        <TextInput label="placetype" source="placetype" />
      </SimpleForm>
    </Create>
  );
};
