import axios from 'axios';
import { URL } from './constants';

export const fetchDetails = async (id) => {
  const res = await axios.get(`${URL}/${id}`);
  return res.data;
};
