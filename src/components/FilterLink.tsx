import React, { ReactNode } from 'React';
import { Subscribe } from 'unstated';
import Link from './Link';
import VisibilityFilterState, { VisibilityFilter } from '@src/state/VisibilityFilterState';

interface IFilterLinkProps {
  filter: VisibilityFilter;
  children: ReactNode;
}

const FilterLink = (props: IFilterLinkProps) => (
  <Subscribe to={[VisibilityFilterState]}>
  {
    (visFilter: VisibilityFilterState) => (
      <Link active={visFilter.state.filter === props.filter} onClick={() => visFilter.setVisibilityFilter(props.filter)}>
        { props.children }
      </Link>
    )
  }
  </Subscribe>
);

export default FilterLink;