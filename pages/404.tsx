import Head from "next/head";
import PageLayout from "../components/PageLayout";

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>404 | SPARK: A Torch Mentorship Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div>
          <h1> Not Found </h1>
          <p>Sorry, we can't find this page</p>
        </div>
      </PageLayout>
    </div>
  );
}
