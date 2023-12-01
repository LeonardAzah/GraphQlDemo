import { gql } from "@apollo/client";
const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $imageUrl: String!
    $amount: Float!
    $currency: String!
  ) {
    addProduct(
      name: $name
      imageUrl: $imageUrl
      amount: $amount
      currency: $currency
    ) {
      id
      name
      imageUrl
      amount
      currency
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
      imageUrl
    }
  }
`;

export { ADD_PRODUCT, DELETE_PRODUCT };
