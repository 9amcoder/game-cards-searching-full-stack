/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import API from '../utils/constants';

export type QueryType = {
    q: string;
    unique: string;
    order: string;
    dir: string;
    include_extras: boolean;
    include_multilingual: boolean;
    include_variations: boolean;
    page: number;
    format: string;
    pretty: string;
}; 

const fetchCards = async (query: QueryType) => {
  const defaultQuery = {
    dir: 'auto',
    include_extras: false,
    include_multilingual: false,
    include_variations: false,
    page: 1,
    format: 'json',
  };

  const finalQuery = { ...defaultQuery, ...query };

  const stringifiedQuery = Object.fromEntries(
    Object.entries(finalQuery).map(([key, value]) => [key, String(value)])
  );

  const params = new URLSearchParams(stringifiedQuery).toString();

  const url = `${API}/cards/search?${params}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error: any) {
    console.error(error.message);
    throw new Error('An error occurred while fetching cards.');
  }
};

export default fetchCards;