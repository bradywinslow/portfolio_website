import { Outlet } from 'react-router'
import Header from '../components/Header';

export default function PageLayout() {
    return (
        <>
            <header>
                <Header />
            </header>
        
            <main>
                <Outlet />
            </main>
        </>
    );
}
