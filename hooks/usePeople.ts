import { useEffect, useState } from "react";

export default function usePeople() {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [nextPage, setNextPage] = useState("https://swapi.dev/api/people/");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async (url: string = "https://swapi.dev/api/people/") => {
    if (url && !isLoading) {
      setIsLoading(true);
      const response = await fetch(url).catch((err) => err);
      const data = await response.json().catch((err: any) => err);
      if (data) {
        if (data.next) {
          setNextPage(data.next);
        } else {
          setNextPage("");
        }
        if (data.results) {
          setPeople((oldState) => {
            if (oldState.includes(data.results[0])) {
              return oldState;
            } else {
              return [...oldState, ...data.results];
            }
          });
        }
        setIsLoading(false);
      }
      return data;
    }
  };

  return { people, isLoading, getPeople, nextPage };
}
