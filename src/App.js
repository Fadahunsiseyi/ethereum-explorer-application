import './App.css';

function App() {
  const url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=30&sort=asc&apikey=G7A3WNIB4ATIDHIJIVTYU76DY6PVYQYECC'
const data = fetch(url).then((res) => res.json().then((json) => {
 const {result} = json;
 console.log(result);
}))
 console.log(data,'the data');
  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
