import {useRouter} from "next/router";
import {useEffect} from "react";
import Head from "next/head";

const Error = (props: any) => {
  console.log('props', props);
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 3000);
  // }, [router]);

  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <h1>Error occurred</h1>
      </div>
    </div>
  )
};

export default Error;