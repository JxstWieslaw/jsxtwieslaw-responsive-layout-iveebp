import './App.css';
import './input.css';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <div className="flex flex-col-reverse h-1/2">
          <div className="bg-green-500 h-1/12">1</div>
          <div className="bg-blue-500 h-5/6">2</div>
          <div className="bg-green-500 h-1/12">3</div>
        </div>
        <div className="h-full">
          <div className="bg-red-500 h-1/2">4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
