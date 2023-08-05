import {RouterProvider} from 'react-router-dom';
import router from './router';

import './styles/style.scss';
import './styles/media-queries.scss';

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
