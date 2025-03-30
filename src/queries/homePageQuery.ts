const homePageQuery = `
  {
    pageCollection(where: { identifier: "home" }, limit: 1) {
      items {
        title
        headline
      }
    }
    socialNetworkCollection {
      items {
        label
        icon
        link
        sortIndex
      }
    }
  }
`;

  export default homePageQuery;
