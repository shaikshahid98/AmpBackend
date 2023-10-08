import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationtype?: SortOrder;
  placetype?: SortOrder;
  updatedAt?: SortOrder;
};
