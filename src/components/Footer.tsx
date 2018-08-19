import React from 'react'
import { Subscribe } from 'unstated';
import VisibilityFilterState, { VisibilityFilter } from '@src/state/VisibilityFilterState';
import FilterLink from '@src/components/FilterLink';

const Footer = () => (
  <div>
    <Subscribe to={[VisibilityFilterState]}>
    {
      (visFilter: VisibilityFilterState) => (
        <React.Fragment>
          <span>Show: </span>
          <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
          <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
          <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
        </React.Fragment>
      )
    }
    </Subscribe>
  </div>
)

export default Footer
