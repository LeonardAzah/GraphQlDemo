const Product = require("../models/Product");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLInt,
} = require("graphql");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    currency: { type: GraphQLString },
  }),
});

const ProductPaginationType = new GraphQLObjectType({
  name: "ProductPagination",
  fields: () => ({
    products: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(ProductType))),
    },
    totalCount: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    products: {
      type: GraphQLNonNull(ProductPaginationType),
      args: {
        page: { type: GraphQLInt, defaultValue: 1 },
        pageSize: { type: GraphQLInt, defaultValue: 10 },
      },
      resolve: async (parent, args) => {
        const { page, pageSize } = args;
        const skip = (page - 1) * pageSize;

        const products = await Product.find().skip(skip).limit(pageSize);
        const totalCount = await Product.countDocuments();

        return { products, totalCount };
      },
    },

    // products: {
    //   type: new GraphQLList(ProductType),
    //   args: {
    //     page: { type: GraphQLInt, defaultValue: 1 },
    //     pageSize: { type: GraphQLInt, defaultValue: 10 },
    //   },
    //   async resolve(parents, args) {
    //     const { page, pageSize } = args;
    //     const skip = (page - 1) * pageSize;

    //     const products = await Product.find().skip(skip).limit(pageSize);
    //     return products;
    //   },

    // },

    // products: {
    //   type: new GraphQLObjectType({
    //     name: "ProductPagination",
    //     fields: {
    //       products: { type: new GraphQLList(ProductType) },
    //       totalCount: { type: GraphQLInt },
    //     },
    //   }),
    //   args: {
    //     page: { type: GraphQLInt, defaultValue: 1 },
    //     pageSize: { type: GraphQLInt, defaultValue: 10 },
    //   },
    //   resolve: async (parent, args) => {
    //     const { page, pageSize } = args;
    //     const skip = (page - 1) * pageSize;

    //     const products = await Product.find().skip(skip).limit(pageSize);
    //     const totalCount = await Product.countDocuments();

    //     return { products, totalCount };
    //   },
    // },

    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Product.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        imageUrl: { type: GraphQLNonNull(GraphQLString) },
        amount: { type: GraphQLNonNull(GraphQLFloat) },
        currency: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parents, args) {
        const product = new Product({
          name: args.name,
          imageUrl: args.imageUrl,
          amount: args.amount,
          currency: args.currency,
        });

        return product.save();
      },
    },

    deleteProduct: {
      type: ProductType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Product.findOneAndDelete({ _id: args.id });
      },
    },

    updateProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        currency: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Product.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              imageUrl: args.imageUrl,
              amount: args.amount,
              currency: args.currency,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
