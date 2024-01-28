import React from 'react';
import Background from './components/Background';

interface AppProps {
  // Define prop types here
}

const App: React.FC<AppProps> = () => {
  // Component logic using props
  return (
    <div className="relative w-full h-screen bg-zinc-800 ">
      <Background />
    </div>
  );
};

export default App;