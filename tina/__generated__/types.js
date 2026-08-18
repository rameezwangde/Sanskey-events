export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  ... on PagesHome {
    heroEyebrow
    heroTitle1
    heroTitleHighlight
    heroTitle2
    heroDescription
    heroPrimaryButton
    heroSecondaryButton
    stats {
      __typename
      value
      label
      icon
    }
    clienteleEyebrow
    clienteleTitle
    clients {
      __typename
      name
      logo
    }
  }
  ... on PagesAbout {
    eyebrow
    title1
    titleHighlight
    title2
    paragraph1
    paragraph2
    paragraph3
    image
  }
  ... on PagesContact {
    eyebrow
    title
    titleHighlight
    subtitle
    mapUrl
    contactCards {
      __typename
      icon
      title
      lines
    }
    footerText1
    footerText2
    stats {
      __typename
      icon
      value
      label
    }
  }
  ... on PagesGallery {
    eyebrow
    title
    images {
      __typename
      image
      thumb
      alt
    }
  }
  ... on PagesModels {
    eyebrow
    title
    description
    ctaText
    ctaLink
    models {
      __typename
      name
      title
      image
    }
  }
}
    `;
export const GlobalsPartsFragmentDoc = gql`
    fragment GlobalsParts on Globals {
  __typename
  ... on GlobalsNavbar {
    navLinks {
      __typename
      name
      path
    }
    socialLinks {
      __typename
      platform
      url
    }
    ctaText
    ctaLink
  }
  ... on GlobalsFooter {
    description
    quickLinks {
      __typename
      label
      url
    }
    email
    phone
    location
    copyright
    legalLinks {
      __typename
      label
      url
    }
  }
}
    `;
export const EventsPartsFragmentDoc = gql`
    fragment EventsParts on Events {
  __typename
  title
  subtitle
  images
}
    `;
export const Event_SectionsPartsFragmentDoc = gql`
    fragment Event_sectionsParts on Event_sections {
  __typename
  eyebrow
  title
  description
  start
  end
  footer
  items
}
    `;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const GlobalsDocument = gql`
    query globals($relativePath: String!) {
  globals(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalsParts
  }
}
    ${GlobalsPartsFragmentDoc}`;
export const GlobalsConnectionDocument = gql`
    query globalsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalsFilter) {
  globalsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalsParts
      }
    }
  }
}
    ${GlobalsPartsFragmentDoc}`;
export const EventsDocument = gql`
    query events($relativePath: String!) {
  events(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EventsParts
  }
}
    ${EventsPartsFragmentDoc}`;
export const EventsConnectionDocument = gql`
    query eventsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EventsFilter) {
  eventsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EventsParts
      }
    }
  }
}
    ${EventsPartsFragmentDoc}`;
export const Event_SectionsDocument = gql`
    query event_sections($relativePath: String!) {
  event_sections(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Event_sectionsParts
  }
}
    ${Event_SectionsPartsFragmentDoc}`;
export const Event_SectionsConnectionDocument = gql`
    query event_sectionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Event_sectionsFilter) {
  event_sectionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Event_sectionsParts
      }
    }
  }
}
    ${Event_SectionsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    globals(variables, options) {
      return requester(GlobalsDocument, variables, options);
    },
    globalsConnection(variables, options) {
      return requester(GlobalsConnectionDocument, variables, options);
    },
    events(variables, options) {
      return requester(EventsDocument, variables, options);
    },
    eventsConnection(variables, options) {
      return requester(EventsConnectionDocument, variables, options);
    },
    event_sections(variables, options) {
      return requester(Event_SectionsDocument, variables, options);
    },
    event_sectionsConnection(variables, options) {
      return requester(Event_SectionsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
