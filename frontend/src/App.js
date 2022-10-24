import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { RouterProvider } from 'react-router-dom';
import { routes } from './utils/routes';
import OutletLoader from './utils/OutletLoader';
import { colors } from './utils/Constants';
Aos.init();

function App() {
  useEffect(() => {
    const x = setInterval(() => {
      Aos.refresh();
    }, 0);
    return () => {
      clearInterval(x);
    };
  }, []);
  return (
    <div className="App bg-[#F9F2ED]">
      <div style={{ backgroundColor: colors.neutral }} className='w-full lg:w-[90%] mx-auto border'>
        <RouterProvider router={routes} fallbackElement={<OutletLoader />} />
      </div>
    </div>
  );
}

export default App;
