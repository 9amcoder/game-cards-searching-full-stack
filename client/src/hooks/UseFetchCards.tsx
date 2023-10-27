import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card } from '../shared/interface';
import { API } from '../shared/constant';

export function useFetchCards(search: string, page: number, order: string) {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const searchRef = useRef(search);

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API}/cards`, {
          params: {
            q: searchRef.current,
            page,
            order,
          },
        });
        setCards(response.data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      }
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      if (searchRef.current) {
        fetchCards();
      }
    }, 1300); // delay

    return () => clearTimeout(timer); // cleanup on unmount or update
  }, [search, page, order]);

  return { cards, isLoading, error };
}