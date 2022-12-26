import Head from "next/head";
import Components from "../components/basic/AllComponents";

export default function Basic() {
  return (
    <div>
      <Head>
        <title>Custom Fans Project</title>
        <meta name="description" content="Custom Fans Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
