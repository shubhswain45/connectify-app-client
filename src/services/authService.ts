import { createGraphqlClient } from "@/clients/api";
import { signupUserMutation } from "@/graphql/mutations/auth";
import { SignupUserInput } from "../../gql/graphql";

class AuthService {
  static validateSignupInput(userData: SignupUserInput) {
    if (!userData.email || !userData.username) {
      throw new Error("Please fill all the fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      throw new Error("Invalid email format.");
    }
  }

  static async signup(userData: SignupUserInput) {
    this.validateSignupInput(userData);
    const graphQLClient = createGraphqlClient();
    try {
      const { signupUser } = await graphQLClient.request(signupUserMutation, { input: userData });
      return signupUser;
    } catch (error: any) {
      throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
    }
  }
}

export default AuthService;
