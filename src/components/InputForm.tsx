import React, { useState } from 'react';
import styled from 'styled-components'


const SeachField = styled.div `
    display: flex;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    margin-top: 5vh;
    justify-content: space-between;
    border: 2px solid var(--color-main);
    width: 480px;
    flex-wrap: nowrap;

    @media only screen and (max-width: 600px)  {
      width: 90%;
    }

    input {
        background: none;
        outline: none;
        border: none;
        width: 320px;
        padding: 10px 15px;
        color: var(--color-white);
        font-weight: 600;
        font-size: 16.5px;
        font-family: 'Poppins', sans-serif;
        height: 60px;
    }
`
const SearchActionButton = styled.button `
    width: 110px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: 16.5px;
    font-family: 'Poppins', sans-serif;
    color: var(--color-white);
    transition: all 0.3s ease-out;
    height: 60px;
    border: none;
    font-weight: 700;
    background: var(--color-main);

    &:hover {
      width: 120px;
    }
`

interface InputFormProps {
  onSearch: (username: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    onSearch(username);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(username);
    }
  };

  return (
    <SeachField>
      <input type="text" value={username} onChange={handleInputChange} placeholder='search username...' onKeyPress={handleKeyPress}/>
      <SearchActionButton onClick={handleSearch}>Search</SearchActionButton>
    </SeachField>
  );
};

export default InputForm;
