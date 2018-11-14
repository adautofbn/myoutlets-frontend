import React from 'react'

const SearchBar = props => (
    <input
    className="ba b--muted-4 bw1 br5 pv4 ph6 f5 c-on-base bg-base order-2-s order-1-ns w-100-s w5-ns"
    placeholder="Buscar"
    onChange={props.handleChange}
  />
)

export default SearchBar;