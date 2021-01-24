import Header from './components/Header';
import Landing from './components/Landing';
import Card from './components/Card';
import './App.css';



function App() {
  const array = Array.from({length: 4}, (item, idx) => idx)
  return (
    <div className="App">
     <Header />
     <div className='Cards'>
      {array.map(i => (
        <Card key={i} />
      ))}
     </div>
   
     {/* <Landing /> */}
    </div>
  );
}

export default App;
