import { useMutation } from "@tanstack/react-query";
import { CreateTrackPayload } from "../../gql/graphql";
import { toast } from "sonner";
import TrackService from "@/services/trackService";

export const useCreateTrack = () => {
    return useMutation({
        mutationFn: async (trackData: CreateTrackPayload) => {
            await TrackService.createTrack(trackData)
        },
        onSuccess: () => {
            toast.success("Track created successfully");
        },
        onError: (error: any) => {
            const errorMessage = error.message.split(":").pop()?.trim() || "Something went wrong";
            toast.error(errorMessage, {
                position: "top-center"
            });
        },
    });
};