
import express from "express";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = __dirname + "/../proto/sum.proto";
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = grpc.loadPackageDefinition(packageDef) as any;
const summationClient = new grpcObj.summation.SummationService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  summationClient.Add({ operandOne: a, operandTwo: b }, (err: any, response: any) => {
    if (err) return res.status(500).send(err);
    res.send({ result: response.result });
  });
});

app.listen(3000, () => {
  console.log("API Gateway listening on port 3000");
});
