import ArticleItemList from "@/components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
import { log } from "console";

const HomePage = () => {
  const articles = getCategorisedArticles();

  log(articles);
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorandGaramond font-light text-6xl text-neutral-900 text-center">
        <h1>Minimal Blog</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  );
};

export default HomePage;
