import { createGraphqlClient } from "@/clients/api";
import { LoginUserInput, ResetPasswordInput, SignupUserInput, VerifyEmailInput } from "../../gql/graphql";
import { forgotPasswordMutation, loginUserMutation, resetPasswordMutation, signupUserMutation, verifyEmailMutation } from "@/graphql/mutations/auth";
import { getCurrentUserQuery } from "@/graphql/queries/auth";

class AuthService {
  // Validate signup input
  static validateSignupInput(userData: SignupUserInput) {
    if (!userData.email || !userData.username) {
      throw new Error("Please fill all the fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      throw new Error("Invalid email format.");
    }
  }

  // Set auth token as a cookie
  private static async setAuthTokenAsCookie(authToken: string) {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: authToken }),
    });

    if (!res.ok) {
      throw new Error("Failed to set the cookie on the server.");
    }
  }

  // Signup user
  static async signup(userData: SignupUserInput) {
    this.validateSignupInput(userData);
    const graphQLClient = createGraphqlClient();
    try {
      const { signupUser } = await graphQLClient.request(signupUserMutation, { input: userData });
      return signupUser;
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response?: { errors?: { message?: string }[] } };
        throw new Error(responseError.response?.errors?.[0]?.message || "Ss");
      } else {
        throw new Error("Ss");
      }
    }
  }

  // Verify email
  static async verifyEmail(userData: VerifyEmailInput) {
    const graphQLClient = createGraphqlClient();
    try {
      const { verifyEmail } = await graphQLClient.request(verifyEmailMutation, { input: userData });

      if (verifyEmail) {
        // Send a POST request to set the auth token as a cookie
        await this.setAuthTokenAsCookie(verifyEmail.authToken)
        return verifyEmail;
      }
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response?: { errors?: { message?: string }[] } };
        throw new Error(responseError.response?.errors?.[0]?.message || "Ss");
      } else {
        throw new Error("Ss");
      }
    }
  }

  // Login user
  static async login(userData: LoginUserInput) {
    const graphqlClient = createGraphqlClient()
    try {
      const { loginUser } = await graphqlClient.request(loginUserMutation, { input: userData });

      if (loginUser) {
        await this.setAuthTokenAsCookie(loginUser.authToken)
      }

      return loginUser
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response?: { errors?: { message?: string }[] } };
        throw new Error(responseError.response?.errors?.[0]?.message || "Ss");
      } else {
        throw new Error("Ss");
      }
    }
  }

  static async forgotPassword(usernameOrEmail: string) {
    if (!usernameOrEmail) {
      throw new Error("Email or Username is required!")
    }
    const graphqlClient = createGraphqlClient()
    try {
      const { forgotPassword } = await graphqlClient.request(forgotPasswordMutation, { usernameOrEmail });
      return forgotPassword;
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response?: { errors?: { message?: string }[] } };
        throw new Error(responseError.response?.errors?.[0]?.message || "Ss");
      } else {
        throw new Error("Ss");
      }
    }
  }

  static async resetPassword(input: ResetPasswordInput) {
    if (input.newPassword != input.confirmPassword) {
      throw new Error("Password does't match.")
    }

    if (input.newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    try {
      const graphqlClient = createGraphqlClient()
      const { resetPassword } = await graphqlClient.request(resetPasswordMutation, { input });
      return resetPassword;
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response?: { errors?: { message?: string }[] } };
        throw new Error(responseError.response?.errors?.[0]?.message || "Ss");
      } else {
        throw new Error("Ss");
      }
    }
  }

  // Fetch current user
  static async getCurrentUser() {
    const graphQLClient = createGraphqlClient();
    const data = await graphQLClient.request(getCurrentUserQuery);
    return data;
  }
}

export default AuthService;
