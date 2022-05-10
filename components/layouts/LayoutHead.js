import Head from "next/head";

const LayoutHead = () => {
  return (
    <Head>
      <title>Bazapp</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
      />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>
  );
};

export default LayoutHead;
