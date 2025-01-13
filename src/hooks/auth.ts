import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AuthService from "@/services/authService";
import { SignupUserInput, VerifyEmailInput } from "../../gql/graphql";
import { toast } from "react-toastify";
import { createGraphqlClient } from "@/clients/api";
import { verifyEmailMutation } from "@/graphql/mutations/auth";
import { getCurrentUserQuery } from "@/graphql/queries/auth";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const graphqlClient = createGraphqlClient()
      const data = await graphqlClient.request(getCurrentUserQuery)
      return data
    }
  })
}

export const useSignupUser = () => {
  return useMutation({
    mutationFn: async (userData: SignupUserInput) => await AuthService.signup(userData),

    onSuccess: () => {
      toast.success("Signup successful now pls verified your account!");
    },

    onError: (error: any) => {
      const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};

export const useVerifyEmail = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userData: VerifyEmailInput) => {
      try {
        const graphqlClient = createGraphqlClient()
        const { verifyEmail } = await graphqlClient.request(verifyEmailMutation, { input: userData });

        console.log(verifyEmail, "vv");
        
        if (verifyEmail) {
          const res = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: verifyEmail.authToken
            }),
          });

          if (!res.ok) {
            throw new Error("Failed to set the cookie on the server.");
          }

          // Return some useful data after success, such as a token if needed
          return verifyEmail
        }
      } catch (error: any) {
        // Throw only the error message for concise output
        throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
      }
    },

    onSuccess: (data) => {
      toast.success("Email Verified Successfully.");
      queryClient.setQueryData(["currentUser"], data)
    },

    onError: (error: any) => {
      const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};



