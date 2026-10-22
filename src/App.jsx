
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <div className="counter-card">
        <div className="header">
          <h1>React Counter</h1>

          <button className="theme-btn" onClick={toggleTheme}>
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <p className="subtitle">
          Manage your counter with React useState
        </p>

        <div className="counter-display">
          <p>Current Count</p>
          <h2>{count}</h2>
        </div>

        <div className="counter-buttons">
          <button className="increment" onClick={increment}>
            + Increment
          </button>

          <button className="decrement" onClick={decrement}>
            − Decrement
          </button>

          <button className="reset" onClick={reset}>
            ↻ Reset
          </button>
        </div>

        <div className="theme-status">
          Current Theme: <strong>{isDark ? 'Dark Mode' : 'Light Mode'}</strong>
        </div>

        <p className="footer">
          Built with React useState Hook
        </p>
      </div>
    </div>
  );
}

export default App;
