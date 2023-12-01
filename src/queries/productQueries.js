import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query getProducts($page: Int!, $pageSize: Int!) {
    products(page: $page, pageSize: $pageSize) {
      products {
        id
        name
        imageUrl
        amount
        currency
      }
      totalCount
    }
  }
`;

const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      name
      imageUrl
      amount
      currency
    }
  }
`;

export { GET_PRODUCT, GET_PRODUCTS };
