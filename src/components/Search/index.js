import React from "react"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
    <SearchBox />
    <Hits />
  </InstantSearch>
)

export default Search
