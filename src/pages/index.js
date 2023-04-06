import ChangeTitle from "@/components/ChangeTitle"
import Head from "next/head"

function Home() {
  const title = "Home page"

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ChangeTitle title={title} />
    </>
  )
}

export default Home