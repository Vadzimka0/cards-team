import { DoubleRange, Pagination, Search, Sort, Table } from './index';

import { ReturnComponentType } from 'types';

export const Packs = (): ReturnComponentType => (
  <div>
    <div>
      <Search />
    </div>
    <div>
      <DoubleRange />
    </div>
    <div>
      <Sort />
    </div>
    <div>
      <Table />
    </div>
    <div>
      <Pagination />
    </div>
  </div>
);
