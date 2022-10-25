import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import { RouterProvider } from 'react-router-dom';
import { routes } from './utils/routes';
import OutletLoader from './utils/OutletLoader';
import { colors } from './utils/Constants';
import 'aos/dist/aos.css';
Aos.init({ offset: 120, duration: 500, });


function App() {
  useEffect(() => {
    setTimeout(() => {
      Aos.refresh();
    });
  }, []);
  return (
    <div className="App bg-[#F9F2ED]">
      <div style={{ backgroundColor: colors.neutral }} className='w-full lg:w-[92%] mx-auto border'>
        <RouterProvider router={routes} fallbackElement={<OutletLoader />} />
      </div>
    </div>
  );
}

export default App;
