import { ThemeProvider } from '@/components/theme-provider';
import {
  Route,
  Routes,
  useRoutes,
  RouteObject,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from '@/pages/home';
import About from '@/pages/about';
import Project from '@/pages/project';
import Projects from '@/pages/projects';
import NotFound from '@/pages/not-found';
import DefaultLayout from '@/layouts/default';
import ContentLayout from '@/layouts/content-layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<DefaultLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<ContentLayout />}>
          <Route index element={<About />} />
        </Route>

        <Route path="/projects" element={<ContentLayout />}>
          <Route index element={<Projects />} />
          <Route path=":name" element={<Project />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
  // return (
  //   <>
  //     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //
  //         <Route path="/projects">
  //           <Route index element={<Projects />} />
  //           <Route path=":name" element={<Project />} />
  //         </Route>
  //
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </ThemeProvider>
  //   </>
  // );
}

export default App;
