const data = {
    authors: [
        { id: "1", name: "Preet Singhwal", bookId: ['101'] },
        { id: "2", name: "Only Preet Singhwal", bookId: ['101','102'] }
    ],
    books: [
        { id: '101', title: "Auto Biograpghy", publishedYear: 2026, authorId: '1' },
        { id: '102', title: "Life Phisophy", publishedYear: 2026, authorId: '2' }
    ]
}

export const resolvers = {
    Book: {
        authors: (parent, args, context, info) => {
            return data.authors.find((authorDetails)=> authorDetails.authorId === parent.bookId)
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter((bookDetails)=> parent.bookId.includes(bookDetails.id))
        }
    },
    Query: {
        books: () => {
            return data.books
        },

        authors: () => {
            return data.authors
        }
    },

    Mutation: {
        addBook: (parent, args, context, info) => {
            const newBook = {...args, id: data.books.length + 1};
            data.books.push(newBook);
            return newBook;
        }
    }
}