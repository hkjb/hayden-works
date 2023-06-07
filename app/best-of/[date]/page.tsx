import BestOf2018 from './2018.mdx';
import BestOf2019 from './2019.mdx';
import BestOf2020 from './2020.mdx';
import BestOf2021 from './2021.mdx';
import BestOf2022 from './2022.mdx';

export default function Page({ params }) {
  const routes = {
    2018: BestOf2018,
    2019: BestOf2019,
    2020: BestOf2020,
    2021: BestOf2021,
    2022: BestOf2022,
  };

  const Markdown = routes[params.date];

  return <Markdown />;
}
