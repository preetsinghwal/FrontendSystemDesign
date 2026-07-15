const PROTO_PATH = "./customers.proto";

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [
    {
        id: "dfd3434",
        name: "Preet Singhwal",
        age: 21,
        address: 'Delhi'
    },
    {
        id: "jk3332d3434",
        name: "Sandeep Singhwal",
        age: 21,
        address: 'Gujrat'
    }
]

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, {customers})
    },
    get: (call, callback) => {
        // TTODO
    },
    insert: (call, callback) => {
        //TODO
    },
    update: (call, callback) => {
        //TODO
    },
    remove: (call, callback) => {
        //TODO
    }
})

server.bindAsync('127.0.0.1:30043', grpc.ServerCredentials.createInsecure(), (err, res) => {
    if(err) {
        console.log(`Error while starting the server: ${err}`)
    } else {
        server.start()
        console.log('gRpc Server is Running!')
    }
})

