import {Inter} from "next/font/google";
import {FeaturedPost} from "@/components/FeaturedPost";
import {Layout} from "@/components/Layout";
import Posts from "./Posts";
import {SectionHeader} from "@/components/SectionHeader";
import Container from "@/components/Container";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Epictetus</title>
      </Head>
      <Container>
        <div className="container mx-auto">
          <Posts />
        </div>
      </Container>
    </Layout>
  );
}
