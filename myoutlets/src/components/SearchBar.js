import React from 'react'
import { Input } from 'semantic-ui-react';

const SearchBar = ({ handleChange }) => (
  <Input
    icon="search"
    placeholder="Buscar"
    onChange={handleChange}
  />
)

export default SearchBar;