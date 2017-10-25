/**
 * regular Promise version here. look into switching to async/await later.
 */

export const getEvents = (allPostsUrl, allMediaUrl) => {
  return fetch(allPostsUrl)
    .then(response => {
      return response.json();
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
          registerLink = post.f1_register_direct_link;

        if (post.categories.includes(106) && featuredMediaId !== 0) {
          // get media data for post if post includes 'featured_media'
          fetch(mediaItemUrl)
            .then(response => {
              return response.json();
            })
            .then(mediaObject => {
              const withImage = {
                id,
                date,
                title,
                content,
                registerLink,
                image: mediaObject.source_url,
              };
              modifiedPosts.push(withImage);
            });
        } else {
          // do not get media data for post if 'featured_media' is missing
          const withoutImage = {
            id,
            date,
            title,
            content,
            registerLink,
            image: false,
          };
          modifiedPosts.push(withoutImage);
        }
      });
      return modifiedPosts;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
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
