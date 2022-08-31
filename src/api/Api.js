const BASE_URL = 'https://api.etherscan.io/api';
const URL_ADDRESS = '0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC';
const API_KEY = 'G7A3WNIB4ATIDHIJIVTYU76DY6PVYQYECC';
// const API_SORT = 'asc';

export default function GetApi({ order }) {
  console.log(order, 'I am the order');
  const url = `${BASE_URL}?module=account&action=txlist&address=${URL_ADDRESS}&startblock=0&endblock=99999999&page=1&offset=30&sort=${order}&apikey=${API_KEY}`;
  const getData = fetch(url)
    .then((res) => res.json().then((res) => {
      const { result } = res;
      return result;
    }))
    .catch((err) => {
      throw Error(err);
    });
  return getData;
}
