import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { Header } from '../organisms/Header';

const MasterLayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 1024px;

  header{
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 1rem 2rem;
      box-shadow: 0 2px 8px #f0f1f2;
  }

  footer{
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
  }

  .menus{
      a {
          font-size: 1rem;
          padding: 1rem;
      }
  }

  .sContent{
      flex: 1;
      display: flex;
      gap: 2rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
  }

  .sAside{
      padding-left: 2rem;
      padding-right: 1rem;
      border-right: 1px solid #ebedf1;
  }

  .sMain{
      flex: 1;
      padding-left: 1.5rem;
      padding-right: 1rem;
  }

`;

type MasterLayoutProps = Record<string, unknown>

export const MasterLayout = (props: PropsWithChildren<MasterLayoutProps>) => {
  return (
    <MasterLayoutWrapper>
      <Header />
      <section className='sContent'>

        <main className='sMain'>
          {props.children}
        </main>

      </section>
    </MasterLayoutWrapper>
  );
};