import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

interface Props {
    children: React.ReactNode;
}

const Main = styled.main`
    background-color: var(--grayDark);
    color: var(--white);
    flex: 1;
`

function Layout({ children }: Props) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default Layout;