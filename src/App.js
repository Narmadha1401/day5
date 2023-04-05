import './App.css';
import Errorboundary from './Comp/ErrorBoundary';
import TestOne from './Comp/TestOne';
import TestTwo from './Comp/TestTwo';
import TestThree from './Comp/TestThree';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <TestOne/>
      </Errorboundary>
      <Errorboundary>
        <TestTwo/>
      </Errorboundary>
      <Errorboundary>
        <TestThree/>
      </Errorboundary>
    </div>
  );
}

export default App;
