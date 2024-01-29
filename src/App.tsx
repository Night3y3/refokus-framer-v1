import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
import { TracingBeam } from './components/ui/tracing-bean';

interface AppProps {
  // Define prop types here
}

const App: React.FC<AppProps> = () => {
  // Component logic using props
  return (

    <div className="relative w-full h-screen  ">
      <Background />
      <TracingBeam className=''>
        <Foreground />
      </TracingBeam>
    </div>

  );
};

export default App;