import Link from 'next/link';
export const Header = () => (
  <header className='header'>

    <Link href={ '/' } passHref>
      <a className='txt--branch-name'>
        Khúc Hiếu Nghi 
      </a>
    </Link>

    <section className='menus'>
      <Link href={ '/' }>
        Home
      </Link>
      <Link href={ '/note/add' } passHref>
        <a >
          Add note
        </a>
      </Link>
    </section>
  </header>
);