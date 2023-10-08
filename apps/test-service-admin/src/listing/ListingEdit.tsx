import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="locationtype" source="locationtype" />
        <TextInput label="placetype" source="placetype" />
      </SimpleForm>
    </Edit>
  );
};
