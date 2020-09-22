import Link from 'next/link';

export const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>© {year} Copyright Allenslist</div>
      <Link href="/about">about</Link>
    </footer>
  );
};
