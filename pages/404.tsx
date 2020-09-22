import { Footer } from '@components/footer';
import { Header } from '@components/header';
import styles from '@styles/404.module.css';

const Page404 = (): React.ReactElement => {
  return (
    <>
      <Header title="- whoops, page not found" />
      <div className={styles.container}>
        <h2>Page Not Found</h2>
        <p>Your wallet breathes a deep sigh of relief</p>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
