import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/todos");

const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: apiClient.getAllTodos,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
