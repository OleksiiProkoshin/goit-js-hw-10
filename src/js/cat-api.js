import axios from 'axios';
import {Report} from 'notiflix/build/notiflix-report-aio';

axios.defaults.headers.common['x-api-key'] = 'live_vcjdLYeJm0RhLHUpFrUBV9gNIWhMQghdpoFPmJejnYgrwxjEitx5V7tET4p5lD5u';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
	return axios
	.get(`breeds/`)
	.then(response => {
		if (response.status !== 200) {
			throw new Error(response.status);
		}
		return response.data})
	.catch(() => {Report.failure('NO NO NO!((((', 'Something went wrong! Try reloading the page!', 'oooooooook')});
}

export function fetchCatByBreed(breedId) {
	return axios
		.get(`/images/search?breed_ids=${breedId}`)
		.then(response => {
			if (response.status !== 200) {
				throw new Error(response.status);
			}
			return response.data[0]})
		.catch(() => {Report.failure('NO NO NO!((((', 'Something went wrong! Try reloading the page!', 'oooooooook')});
}