import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles data-test="nav">
        <Link href='/shop'>
            <a>Shop</a>
        </Link>
        <Link href='/sell'>
            <a>Sell</a>
        </Link>
        <Link href='/signup'>
            <a>Signup</a>
        </Link>
        <Link href='/orders'>
            <a>Orders</a>
        </Link>
        <Link href='/me'>
            <a>Account</a>
        </Link>
      
    </NavStyles>
)

export default Nav;