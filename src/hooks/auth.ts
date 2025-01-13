import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AuthService from "@/services/authService";
import { LoginUserInput, SignupUserInput, VerifyEmailInput } from "../../gql/graphql";
import { toast } from "react-toastify";
import { createGraphqlClient } from "@/clients/api";
import { verifyEmailMutation } from "@/graphql/mutations/auth";
import { getCurrentUserQuery } from "@/graphql/queries/auth";
import { useRouter } from "next/router";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: AuthService.getCurrentUser,
  });
};

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: VerifyEmailInput) => {
      const verifyEmail = await AuthService.verifyEmail(userData);
      return verifyEmail;
    },

    onSuccess: (data) => {
      toast.success("Email Verified Successfully.");
      queryClient.setQueryData(["currentUser"], data);
    },

    onError: (error: any) => {
      const errorMessage = error.message.split(":").pop()?.trim() || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};


export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter()

  return useMutation({
    mutationFn: async (userData: LoginUserInput) => {
      const loginUser = await AuthService.login(userData);
      return loginUser;
    },

    onSuccess: (data) => {
      toast.success("Login successful!");
      router.replace("/dashboard")
      queryClient.setQueryData(["currentUser"], () => {
        return { getCurrentUser: data }
      })
    },

    onError: (error: any) => {
      const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
      toast.error(errorMessage);
    }
  });
};
