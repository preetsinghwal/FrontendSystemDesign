export const typeDefs = `#grapghQl

   type Book {
    id: ID!
    title: String
    publishedYear: Int
    authors: Author
   }

   type Author {
    id: ID!
    name: String
    books: Book
   }

   type Query {
    authors: [Author]
    books: [Book]
   }

   type Mutation {
    addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
   }
`