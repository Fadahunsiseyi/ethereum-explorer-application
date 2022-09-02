const BASE_URL = 'https://api.etherscan.io/api';
const URL_ADDRESS = '0x4e83362442b8d1bec281594cea3050c8eb01311c';
const CONTRACT_ADDRESS = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2';
const END_BLOCK = '27025780';
const API_KEY = 'G7A3WNIB4ATIDHIJIVTYU76DY6PVYQYECC';

export default function GetApi({ order }) {
  const url = `${BASE_URL}?module=account&action=tokentx&contractaddress=${CONTRACT_ADDRESS}&address=${URL_ADDRESS}&page=1&offset=36&startblock=0&endblock=${END_BLOCK}&sort=${order}&apikey=${API_KEY}`;
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
