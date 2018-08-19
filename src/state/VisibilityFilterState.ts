import { Container } from "unstated";

export enum VisibilityFilter {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}

interface IVisibilityFilterStateProps {
  filter: VisibilityFilter
}

export default class VisibilityFilterState extends Container<IVisibilityFilterStateProps> {

  state = { filter: VisibilityFilter.SHOW_ALL }

  setVisibilityFilter = (filter: VisibilityFilter) => {
    this.setState({ filter });
  }
}