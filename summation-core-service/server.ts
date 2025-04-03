
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = __dirname + "/../proto/sum.proto";
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const summation = grpcObj.summation;

function add(call: any, callback: any) {
  const result = call.request.operandOne + call.request.operandTwo;
  callback(null, { result });
}

const server = new grpc.Server();
server.addService(summation.SummationService.service, { Add: add });
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log("SummationService gRPC Server running on port 50051");
});
