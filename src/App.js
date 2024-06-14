import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;
