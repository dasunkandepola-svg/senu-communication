import { RouterProvider } from 'react-router';
import { router } from './routes';
import { DarkModeProvider } from './components/DarkModeContext';

export default function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}