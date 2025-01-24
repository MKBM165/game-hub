import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface FetchingGenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchingGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};
export default useGenres;
