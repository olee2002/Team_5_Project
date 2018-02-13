//Import from React
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'

class SplashPage extends Component {
  render() {
    return (
      <Container>
        <h1>City Point</h1>

        <button type='button' onClick={() => this.props.push('/users')}>
          Enter
        </button>
      </Container>

    );
  }
}

export default connect(null, {push})(SplashPage)

// Styled-Components

const Container = styled.div `
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    right:0;
    bottom:0;
    font-family: 'Montserrat', sans-serif;
    color:#000033;
    font-size: 45px;
    text-shadow:4px 4px 8px rgba(0,0,0,0.35);
    background-size: cover;
    background-repeat:no-repeat;
    background-image:linear-gradient(white,transparent,transparent,transparent,transparent),url(https://pbs.twimg.com/media/BzrxuvVIgAAj7YE.jpg:large);
    h1{
     position: absolute;
     top:75px;
    left:100px;
    }
    button{
      border:1px solid black;
      background:none;
      margin-left: 180px;
      width:100px;
      padding:5px;
      font-size: 25px;
      font-family: 'Montserrat', sans-serif;
      border-radius: 5px;
      position: absolute;
      top:260px;
      left:50px;
      cursor: pointer;
      &:hover{
      background:rgba(0,0,0,0.15)
      }
    }`