export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  heroImage
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
    `;
export const AboutPartsFragmentDoc = gql`
    fragment AboutParts on About {
  __typename
  eyebrow
  title1
  titleHighlight
  title2
  paragraph1
  paragraph2
  paragraph3
  image
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
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
    `;
export const GalleryPartsFragmentDoc = gql`
    fragment GalleryParts on Gallery {
  __typename
  eyebrow
  title
  images {
    __typename
    image
    thumb
    alt
  }
}
    `;
export const ModelsPartsFragmentDoc = gql`
    fragment ModelsParts on Models {
  __typename
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
    `;
export const RegisterPartsFragmentDoc = gql`
    fragment RegisterParts on Register {
  __typename
  eyebrow
  title
  description
  formFields {
    __typename
    name
    label
    type
    placeholder
    options
  }
}
    `;
export const NavbarPartsFragmentDoc = gql`
    fragment NavbarParts on Navbar {
  __typename
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
    `;
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
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
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
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
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
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
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const AboutDocument = gql`
    query about($relativePath: String!) {
  about(relativePath: $relativePath) {
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
    ...AboutParts
  }
}
    ${AboutPartsFragmentDoc}`;
export const AboutConnectionDocument = gql`
    query aboutConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutFilter) {
  aboutConnection(
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
        ...AboutParts
      }
    }
  }
}
    ${AboutPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
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
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
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
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const GalleryDocument = gql`
    query gallery($relativePath: String!) {
  gallery(relativePath: $relativePath) {
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
    ...GalleryParts
  }
}
    ${GalleryPartsFragmentDoc}`;
export const GalleryConnectionDocument = gql`
    query galleryConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GalleryFilter) {
  galleryConnection(
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
        ...GalleryParts
      }
    }
  }
}
    ${GalleryPartsFragmentDoc}`;
export const ModelsDocument = gql`
    query models($relativePath: String!) {
  models(relativePath: $relativePath) {
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
    ...ModelsParts
  }
}
    ${ModelsPartsFragmentDoc}`;
export const ModelsConnectionDocument = gql`
    query modelsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ModelsFilter) {
  modelsConnection(
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
        ...ModelsParts
      }
    }
  }
}
    ${ModelsPartsFragmentDoc}`;
export const RegisterDocument = gql`
    query register($relativePath: String!) {
  register(relativePath: $relativePath) {
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
    ...RegisterParts
  }
}
    ${RegisterPartsFragmentDoc}`;
export const RegisterConnectionDocument = gql`
    query registerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RegisterFilter) {
  registerConnection(
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
        ...RegisterParts
      }
    }
  }
}
    ${RegisterPartsFragmentDoc}`;
export const NavbarDocument = gql`
    query navbar($relativePath: String!) {
  navbar(relativePath: $relativePath) {
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
    ...NavbarParts
  }
}
    ${NavbarPartsFragmentDoc}`;
export const NavbarConnectionDocument = gql`
    query navbarConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NavbarFilter) {
  navbarConnection(
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
        ...NavbarParts
      }
    }
  }
}
    ${NavbarPartsFragmentDoc}`;
export const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
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
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
export const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
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
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
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
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    about(variables, options) {
      return requester(AboutDocument, variables, options);
    },
    aboutConnection(variables, options) {
      return requester(AboutConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    gallery(variables, options) {
      return requester(GalleryDocument, variables, options);
    },
    galleryConnection(variables, options) {
      return requester(GalleryConnectionDocument, variables, options);
    },
    models(variables, options) {
      return requester(ModelsDocument, variables, options);
    },
    modelsConnection(variables, options) {
      return requester(ModelsConnectionDocument, variables, options);
    },
    register(variables, options) {
      return requester(RegisterDocument, variables, options);
    },
    registerConnection(variables, options) {
      return requester(RegisterConnectionDocument, variables, options);
    },
    navbar(variables, options) {
      return requester(NavbarDocument, variables, options);
    },
    navbarConnection(variables, options) {
      return requester(NavbarConnectionDocument, variables, options);
    },
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
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
