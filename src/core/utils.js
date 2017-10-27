/**
 * regular Promise version here. look into switching to async/await later.
 */

export const getEvents = (allPostsUrl, allMediaUrl) => {
  return fetch(allPostsUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject('something went wrong while fetching "all posts". origin: getEvents()');
      }
    })
    .then(posts => {
      return posts.filter(post => post.categories.includes(106));
    })
    .then(filteredPosts => {
      const modifiedPosts = [];
      filteredPosts.forEach(post => {
        const featuredMediaId = post.featured_media;
        const mediaItemUrl = allMediaUrl + `/${featuredMediaId}`;
        const id = post.id,
          date = post.date,
          title = post.title.rendered,
          content = post.content_plain_text,
          content2 = post.content_plain_text_2,
          content3 = post.content_plain_text_3,
          registerLink = post.f1_register_direct_link;

        if (post.categories.includes(106) && featuredMediaId !== 0) {
          // get media data for post if post includes 'featured_media'
          fetch(mediaItemUrl)
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                return Promise.reject(
                  `something went wrong while fetching "featured media" for post id: ${id}. origin: getEvents()`
                );
              }
            })
            .then(mediaObject => {
              const withImage = {
                id,
                date,
                title,
                content,
                content2,
                content3,
                registerLink,
                image: mediaObject.source_url,
              };
              modifiedPosts.push(withImage);
            })
            .catch(e => {
              const getImageFailure = {
                id,
                date,
                title,
                content,
                content2,
                content3,
                registerLink,
                image: false,
              };
              modifiedPosts.push(getImageFailure);
              console.error(e);
            });
        } else {
          // do not get media data for post if 'featured_media' is missing
          const withoutImage = {
            id,
            date,
            title,
            content,
            content2,
            content3,
            registerLink,
            image: false,
          };
          modifiedPosts.push(withoutImage);
        }
      });
      return modifiedPosts;
    })
    .catch(e => console.error(e));
};

export const getMessages = allPostsUrl => {
  return fetch(allPostsUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject('something went wrong while fetching "all posts". origin: getMessages()');
      }
    })
    .then(posts => {
      return posts.filter(post => post.categories.includes(122));
    })
    .catch(e => console.error(e));
};

/**
 * async/await attempt below... come back to this later
 * the componentDidMount for this would have an async in front of it, and
 * the body would look like this:
 * const modifiedPosts = await getEvents();
 * this.setState({ modifiedPosts });
 */

/* const getEventPosts = async () => {
  const postsUri = 'http://stfchurch.com/wp-json/wp/v2/posts';

  const postsResponse = await fetch(postsUri);
  const allPosts = await postsResponse.json();
  console.log(allPosts);
  const filteredHappening = allPosts.filter(post => {
    return post.categories.includes(106);
  });
  // return allPosts;
  console.log(filteredHappening);
  return filteredHappening;
};

export const getEventImages = async () => {
  const posts = await getEventPosts();
  console.log(posts);

  const eventsWithImages = await posts.map(async post => {
    const featuredMediaId = post.featured_media;
    const mediaUri = `http://stfchurch.com/wp-json/wp/v2/media/${featuredMediaId}`;
    const mediaResponse = await fetch(mediaUri);
    const eventMediaObject = await mediaResponse.json();
    // console.log(`id: ${post.id}`, eventMediaObject);
    const result = {
      id: post.id,
      date: post.date,
      title: post.title.rendered,
      content: post.post_content_plain_text,
      registerLink: post.f1_register_direct_link,
      image: eventMediaObject.source_url,
    };
    // console.log(result);
    return result;
  });
  console.log(eventsWithImages);
  return eventsWithImages;
}; */

/**
 * Initializes a Subsplash Web App embed with the provided parameters.
 *
 * Note: For IE support, this file needs to be maintained in ES5.
 * @TODO - build this into the babel chain so that we don't have to use ES5.
 *
 * @param  {String} path path to the route that is being embedded
 * @param  {Boolean} beta is this snippet for a beta route
 * @return {undefined}
 */
export function subsplashEmbed(path, host, id) {

  /**
   * Strip off the leading + trailing `/`from the host and path, if present.
   */
  host = host.replace(/^\/|\/$/g, '');
  path = path.replace(/^\/|\/$/g, '');

  /** @type {String} */
  var iframeId = id || 'subsplash-embed';

  /** @type {String} */
  var iframeSrc = host;

  /** @type {?String} */
  var sapurl = getSapurl(window.location.search);

  /**
   * If the current URL has an `sapurl` in the query params, decode it and set
   * the source of the iframe to that path (following a deep link). Otherwise,
   * go to the specified embed code location.
   *
   * @param  {?String} queryParams.sapurl a base64 encoded path
   * @return {undefined}
   */
  if (sapurl) {
    /** decode base64 encoded url */
    sapurl = atob(sapurl);

    /** remove any leading + trailing slash */
    sapurl = sapurl.replace(/^\/|\/$/g, '');

    iframeSrc += `/${sapurl}`;
  } else {
    iframeSrc += `/${path}`;
  }

  /** Add embed param to the iframe src URL. */
  if (iframeSrc.indexOf('embed') === -1) {
    iframeSrc.indexOf('?') === -1 ? iframeSrc += '?embed=true' : iframeSrc += '&embed=true';
  }

  /** Set the `src` of the iframe and display it. */
  document.getElementById(iframeId).setAttribute('src', iframeSrc);

  /** Get the offset of the iframe from the top of the page. */
  var iframePosition = document.getElementById(iframeId).getBoundingClientRect().top;

  /** Listen for post messages being sent from the iframe */
  window.addEventListener('message', function (event) {

    if (event.data.pageHeight) {
      /** Update the height of the iframe to match the height of the page. */
      document.getElementById(iframeId).height = event.data.pageHeight;

      /**
       * Update the scroll position to be at the top of the window if the
       * iframe is less than 200 pixels from the top of the window. Otherwise
       * scroll to the top of the iframe.
       */
      if (iframePosition < 200) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, iframePosition);
      }
    }

    /** Update the `sapurl` parameter to be the current iframe path. */
    if (event.data.pageUrl) {
      var _sapurl = getSapurl(window.location.search);
      var url = window.location.href;

      if (_sapurl) {

        /** Replace `sapurl` in query param with updated path */
        url = url.replace(/(sapurl=)[^\&]+/, '$1' + event.data.pageUrl);
      } else {

        /** Add `sapurl` to the query params with the current path */
        url = url + ('?sapurl=' + event.data.pageUrl);
      }

      /**
       * Perform an update to the query parameters in the URL without
       * triggering a full page refresh.
       */
      window.history.replaceState({ path: url }, '', url);
    }
  });
}

/**
 * Grabs the `sapurl` value from a query string, if it exists.
 *
 * @param  {String} - query string
 * @return {?String}
 */
function getSapurl(url) {
  var sapurlMatch = url.match(/sapurl=([^&]*)/);

  if (sapurlMatch && sapurlMatch[1]) {
    return sapurlMatch[1];
  }
}
