// React
import React from 'react';
import Layout from './layout';
// GraphQL
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const GetRepositoryInfoQuery = gql`
  query {
    viewer {
      name
      login
      avatarUrl
      repositories(first: 100) {
        totalCount
        nodes {
          name
            object(expression: "master:") {
            ... on Tree{
              entries{
                name
                type
                mode
              }
            }
          }
          watchers(first: 100) {
            totalCount
            nodes {
              name
            }
          }
          stargazers(first: 100) {
            totalCount
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

const withInfo = graphql(GetRepositoryInfoQuery, {
  props: ({ data }) => {
    // loading state
    if (data.loading) {
      return { loading: true };
    }
    // error state
    if (data.error) {
      console.error(data.error);
    }
    // OK state
    return { data };
  },
});

// Repository
class Repository extends React.Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      login: props.login,
      name: props.name,
      avatarUrl: props.avatarUrl
    };
  }

  componentWillReceiveProps(newProps) {
    const repo = newProps.data.viewer;
    console.log(newProps.data.viewer);
    // repositories TotalCount
    const repoTotalCount = repo.repositories.totalCount;
    console.log("repoTotalCount: " + repoTotalCount);
    // Array of repositories => repositoryList
    const repositoryList = [];
    for (let index = 0; index < repo.repositories.nodes.length; index++) {
      const element = repo.repositories.nodes[index];
      repositoryList.push(element);
    }
    //Examples:
    //Name of the first repository
    console.log("Name of the first repository: " + repositoryList[0].name);
    //Total stargazers of the first repository
    console.log("Total stargazers: " + repositoryList[0].stargazers.totalCount);
    //Total watchers of the first repository
    console.log("Total watchers: " + repositoryList[0].watchers.totalCount);

    // states
    this.setState({
      login: repo.login,
      name: repo.name,
      avatarUrl: repo.avatarUrl
    });
  }

  render() {
    return (
      <Layout />
    )
  }
}

const RepositoryWithInfo = withInfo(Repository);
export default RepositoryWithInfo;