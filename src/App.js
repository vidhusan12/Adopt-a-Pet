import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// Add react-router-dom imports

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Root />}>
      <Route path='' element={<HomePage /> } />
      <Route path='' element={<SearchPage /> } />
      <Route path='' element={<PetDetailsPage /> } />
      <Route path='' element={<PetDetailsNotFound /> } />
    </Route>
  )
)

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter}/>
  );
}

export default App;
