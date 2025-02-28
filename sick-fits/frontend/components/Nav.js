import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/items">
            <a>Shop</a>
        </Link>
        <Link href="/sell">
            <a>sell</a>
        </Link>
        <Link href="/signup">
            <a>signup</a>
        </Link>
        <Link href="/order">
            <a>order</a>
        </Link>
        <Link href="/me">
            <a>Account</a>
        </Link>
    </NavStyles>
);

export default Nav;