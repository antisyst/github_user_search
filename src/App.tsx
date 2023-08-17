import React from 'react';
import InputForm from './components/InputForm';
import { fetchUserData } from './utils/githubAPI';
import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'; 
import Loader from './components/Loader';
import { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } from './store/userSlice';
import { RootState } from './store/store'; 



const ActionLayout = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const CardItem = styled.div `
    width: 550px;
    display: flex;
    text-align: center;
    margin-top: 2vh;
    flex-direction: row;
    align-items: center;
    border: 2px solid var(--color-main);
    justify-content: flex-start;
    min-height: 130px;
    max-height: auto;
    padding: 10px 15px;
    border-radius: 8px;

    @media only screen and (max-width: 600px)  {
      width: 440px;
    }

    img {
      width: 110px;
      height: 110px;
      margin-top: 6px;
      filter: brightness(1.2);
    }
`
const CartInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    justify-content: center;

  
    p {
      color: var(--color-main);
      font-weight: 800;
      margin-top: 4px;
      font-size: 17px;
      text-align: left;
      span {
        color: var(--color-white);
        text-align: left;
        font-weight: 800;
        margin-left: 7px;
      }
    }
    a {
      text-decoration: none;
       transition: all 0.3s ease-out;
       text-align: left;

      &:hover {
        filter: brightness(1.2);
      }
     
     
    }
`
const UserName = styled.p `
    font-weight: 800;
    font-size: 17px;
    transition: all 0.3s ease-out;
    color: var(--color-main);

    &:hover {
      filter: brightness(1.2);
    }
`
const LinkRouteAction = styled.a `
    color: var(--color-main);
    font-weight: 800;
    text-decoration: none;
    margin-top: 4px;
`


const App: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  const handleSearch = async (username: string) => {
    dispatch(fetchUserDataStart());
    try {
      const userData = await fetchUserData(username);
      dispatch(fetchUserDataSuccess(userData));
    } catch (error) {
      dispatch(fetchUserDataFailure());
    }
  };

  return (
    <ActionLayout>
      <InputForm onSearch={handleSearch} />
      {loading && <Loader/>}
      {userData && (
        <CardItem>
         <div>
           <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
         </div>
          <CartInfo>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <UserName>@{userData.login}</UserName>
          </a>
            <p>Bio: <span>{userData.bio}</span></p>
            <LinkRouteAction href={userData.html_url} target="_blank" rel="noopener noreferrer">
             {userData.html_url}
            </LinkRouteAction>
          </CartInfo>
        </CardItem>
      )}
    </ActionLayout>
  );
};

export default App;
