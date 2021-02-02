/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz/index';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <div>
        <QuizScreen
          externalQuestions={dbExterno.questions}
          externalBg={dbExterno.bg}
        />
        {/* <pre style={{ color: 'black' }}>
            {JSON.stringify(dbExterno.questions, null, 4)}
        </pre> */}
      </div>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  try {
    const [projectName, githubUser] = context.query.id.split('___');
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((serverRes) => {
        if (serverRes.ok) {
          return serverRes.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((serverResObj) => serverResObj);
    // .catch((err) => {
    //   console.error(err);
    // });

    //   console.log('dbExterno', dbExterno);

    return {
      props: {
        dbExterno,
      },

    };
  } catch (err) {
    throw new Error(err);
  }
}
