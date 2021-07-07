import Link from "next/link";
import Image from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
}
