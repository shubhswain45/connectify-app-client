import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AuthService from "@/services/authService";
import { LoginUserInput, ResetPasswordInput, SignupUserInput, VerifyEmailInput } from "../../gql/graphql";
import { toast } from "react-toastify";
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


export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (usernameOrEmail: string) => {
      const forgotPassword = await AuthService.forgotPassword(usernameOrEmail)
      return forgotPassword
    },

    onSuccess: () => {
      toast.success("Reset link send successful to your Email!");
    },

    onError: (error) => {
      const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
      toast.error(errorMessage);
    }
  });
}


export const useResetPassword = () => {
  return useMutation({
    mutationFn: async (input: ResetPasswordInput) => {
      const resetPassword = await AuthService.resetPassword(input)
      return resetPassword
    },

    onSuccess: () => {
      toast.success("Reset password successful! now back to login");
    },

    onError: (error) => {
      const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
      toast.error(errorMessage);
    }
  });
}