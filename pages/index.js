import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';


const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;




export default function Home() {
  return  (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>
              {db.title}
            </h1>

          </Widget.Header>
          
          <Widget.Content>
            <p>
              {db.description}
            </p>
          </Widget.Content>
        </Widget>
        
        <Widget>
          
          
          <Widget.Content>
            <h1>
              Teste para ver como vai ficar
            </h1>
            <p>
              {db.description}
            </p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://www.github.com/Silviomjr"/>
    </QuizBackground>

  ) 
}
