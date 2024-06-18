import { METHODS } from '../constants/methods';
import { fetchData } from './fetchData';

export const getData = async url => {
	const data = await fetchData(url, { method: METHODS.GET });
	return data;
};
