import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;

  }
  
  body{
    font-family:Arial, Helvetica, sans-serif;
  }

  ul{
    list-style-type: none;
    margin:0;
    padding:0
  };

  a{
    text-decoration:none;
  }

  button{
    outline: none;
    border: none;
    cursor:pointer;
  }

  input{
    outline-style:none;
    border: none;
  }
`;
