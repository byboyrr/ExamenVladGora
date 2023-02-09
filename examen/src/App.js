import './App.module.css';
import AppLayout from './components/AppLayout/AppLayout';
import { Route, Routes } from 'react-router-dom';
import { Form1 } from './components/Forms/Form1/Form1';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path={'/form1'} element={<Form1 />} />
        {/* <Route path={'/form2'} element={<Form2 />} />
        <Route path={'/form3'} element={<Form3 />} /> */}
      </Routes>
    </AppLayout>
  );
}

export default App;
