import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper , IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //dont want to reload the page when we submit a form

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
      //reset searchTerm to empty string at the end
      setSearchTerm('');
    }
  }

  return (
    <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{borderRadius : 20,
            border: '1px solid #e3e3e3', 
            pl: 2 , //padding left
            boxShadow: 'none',
            mr: { sm: 5} //margin right set to small devices with size 5    
    }}
    >
        <input 
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} //update search term every time we type something

        />
        <IconButton type="submit" sx={{p:'10px', color: 'red'}}> 
          <Search />
        
        </IconButton>
    </Paper>

  )
}

export default SearchBar