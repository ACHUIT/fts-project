import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Appendix from './components/Appendix';
import BuiltHypercare from './components/BuiltHypercare';
import FtsTechnicalStack from './components/FtsTechnicalStack';
import MoveRun from './components/MoveRun';
import HypercareRun from './components/HypercareRun';
import Home from './components/Home';
import { Box } from '@mui/material';

const App = () => (
    <BrowserRouter>
     <Box>
       <Navbar/>
       <Routes>
         <Route path = "/" exact element= {<Home/>} />
         <Route path = "/ftstechnicalstacks" element={<FtsTechnicalStack/>} />
         <Route path = "/movetorunprocess" element={<MoveRun/>} />
         <Route path = "/frombuildtohypercare" element={<BuiltHypercare/>} />
         <Route path = "/fromhypercaretorun" element={<HypercareRun/>} />
         <Route path = "/Appendix" element={<Appendix/>} />
       </Routes>
     </Box>
    </BrowserRouter>
  )


export default App;