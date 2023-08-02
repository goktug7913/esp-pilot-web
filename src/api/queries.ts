import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "@/api/axiosClient";
import { IPidList } from "@/types/types";

/**
 * @description Gets the list of PIDs
 * @example const { data, isLoading, error } = usePidList()
 */
export function usePidList() {
  return useQuery({
    queryKey: ["pidList"],
    queryFn: async () => {
      const { data } = await axiosClient.get<IPidList>("/pid");
      return data;
    },
  });
}

/**
 * @description Restarts the ESP32
 * @example const mutation = useRestartEsp()
 */
export function useRestartEsp() {
  const mutation = useMutation({
    mutationKey: ["restartEsp"],
    mutationFn: async () => {
      const { data } = await axiosClient.post("/restart");
      return data;
    },
  });
  return mutation;
}
