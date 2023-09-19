import {useRouter} from "next/router";
import {useEffect} from "react";
import Head from "next/head";
import styles from "@/src/styles/NotFoundPage.module.css";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Not found page</title>
      </Head>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundTitle}>Упс... Ничего не найдено.</h1>
        <p className={styles.notFoundMessage}>Попробуйте вернуться на главную страницу и поискать что-нибудь еще.</p>
      </div>
    </div>
  )
};

export default Error;