import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_Wgjln7clX",
  ClientId: "32hma0glnnr13olip7tp1trpne",
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;
