import { graphql } from "../../../gql";

export const signupUserMutation = graphql(`
    #graphql
    mutation SignupUser($input: SignupUserInput!) {
        signupUser(input: $input)
    }
`)

export const verifyEmailMutation = graphql(`
    #graphql
    mutation VerifyEmail($input: VerifyEmailInput!) {
        verifyEmail(input: $input) {
            id
            email
            username
            fullName
            bio
            profileImageURL
            authToken
        }
    }
`)

export const loginUserMutation = graphql(`
    #graphql
    mutation LoginUser($input: LoginUserInput!) {
        loginUser(input: $input) {
          id
          email
          username
          fullName
          bio
          profileImageURL
          authToken
        }
    }
`)

export const forgotPasswordMutation = graphql(`
    #graphql
    mutation ForgotPassword($usernameOrEmail: String!) {
        forgotPassword(usernameOrEmail: $usernameOrEmail)
    }
`)

export const resetPasswordMutation = graphql(`
    #graphql
    mutation ResetPassword($input: ResetPasswordInput!){       
        resetPassword(input: $input)
    }
`)