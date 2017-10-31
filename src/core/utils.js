/**
 * regular Promise version here of getEvents. look into switching to async/await later (below).
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

export const getCampusImages = allMediaUrl => {
  return fetch(allMediaUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject('something went wrong while fetching "all media". origin: getCampusImages()');
      }
    })
    .then(allMedia => {
      return allMedia.filter(img => img.alt_text === 'stf-info-site');
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
