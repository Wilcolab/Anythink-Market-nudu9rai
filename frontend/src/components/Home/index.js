import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  APPLY_TITLE_FILTER,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
  onSearchBarChange: (value, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, value, pager, payload })
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResult: { items: [], itemsCount: 0 }
    }
    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
  }

  onSearchQueryChange = (value) => {
    this.setState({ searchQuery: value })
    if (value.length <= 2) {
      value = ""
    }
    const pager = (page) => agent.Items.byTitle(value, page)
    const result = agent.Items.byTitle(value)
    this.setState({ searchResult: result })
    this.props.onSearchBarChange(value, pager, result)
  }

  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <Banner onSearchQueryChange={this.onSearchQueryChange} searchQuery={this.state.searchQuery} />

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
