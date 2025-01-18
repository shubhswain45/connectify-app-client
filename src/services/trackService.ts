import { CreateTrackPayload } from "../../gql/graphql";
import { createGraphqlClient } from "@/clients/api";
import { createTrackMutation } from "@/graphql/mutations/track";

class TrackService {
    static async createTrack(trackData: CreateTrackPayload) {
        if (!trackData.audioFileUrl) {
            throw new Error("Please select an audio file.");
        }

        if (!trackData.title) {
            throw new Error("Title is required!");
        }

        // Convert duration string to a number for comparison
        const durationInSeconds = parseFloat(trackData.duration);
        if (isNaN(durationInSeconds) || durationInSeconds <= 10) {
            throw new Error("Audio must be longer than 10 seconds!");
        }

        const graphqlClient = createGraphqlClient();
        try {
            const { createTrack } = await graphqlClient.request(createTrackMutation, {
                payload: trackData,
            });
            return createTrack;
        } catch (error: unknown) {
            if (error && typeof error === "object" && "response" in error) {
                const responseError = error as { response?: { errors?: { message?: string }[] } };
                throw new Error(responseError.response?.errors?.[0]?.message || "Ss");
            } else {
                throw new Error("Ss");
            }
        }
    }
}

export default TrackService;
