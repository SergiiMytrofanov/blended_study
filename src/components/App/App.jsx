import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

import DataArticle from "../../data/article.json";
import data from '../../data/data.json';
import forbes from '../../data/forbes.json'
import transactions from 'data/transactions.json'


export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={DataArticle.poster}
          tag={DataArticle.tag}
          title={DataArticle.title}
          description={DataArticle.description}
          userName={DataArticle.name}
          avatar={DataArticle.avatar}
          postedAt={DataArticle.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics stats={data} title="Main Statistics" />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes}/>

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory transactions={transactions}/>
      </Container>
    </Section>
  );
};
