import { Footer } from '@components/footer';
import { Header } from '@components/header';
import styles from '@styles/About.module.css';

const About = (): React.ReactElement => {
  return (
    <>
      <Header title="- about" />
      <main>
        <div className={styles.container}>
          <h1>About</h1>
          <p>
            allenslist is a curated list of expensive shit that Allen makes us
            want to buy.
          </p>
          <p>
            Now you may be wondering, who the hell is Allen? Who is{' '}
            <strong>us</strong>? Why am I even reading this?
          </p>
          <p>All I have to say is shhhhhhhhhhh...</p>
          <p>
            Buckle up and prepare to ride into the apocalypse broke as fuck.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
