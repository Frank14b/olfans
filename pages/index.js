import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CAVIAR - Best in class OnlyFans marketing</title>
        <meta
          name="description"
          content="In caviar we serve delicasy. 
          With multi platform social media marketing we help our clients to reach maximum viewers but with a style and sense.  The 'you' as a brand, the  delcious version of yourself which you want to project to  your audience, we are here to help you and celebrate in your journey to glory."
        />
        <meta
          name="title"
          content="CAVIAR - Best in class OnlyFans marketing"
        />
        <link rel="icon" href="/logo.jpeg"/>
        <meta property="og:title" content="CAVIAR - Best in class OnlyFans marketing"/>
        <meta property="og:image" content="/logo.jpeg" />
        <meta property="og:description" content="In caviar we serve delicasy. 
          With multi platform social media marketing we help our clients to reach maximum viewers but with a style and sense.  The 'you' as a brand, the  delcious version of yourself which you want to project to  your audience, we are here to help you and celebrate in your journey to glory."
        />
        <link rel="icon" href="/logo.jpeg" />
        <meta name="auhtor" content="CAVIAR"/>
      </Head>
      <CustomComponents />
    </div>
  );
}
