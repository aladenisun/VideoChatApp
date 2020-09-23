import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_rxGZ0anSz",
  ClientId: "5kirn94meau8nqao5eltbk6qsb",
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
