/**
 * regular Promise version here, but pulled out into this utils file. revisit.
 */

/* export const getEvents = () => {
  const postsUri = 'http://stfchurch.com/wp-json/wp/v2/posts';

  const get = fetch(postsUri)
    .then(response => {
      return response.json();
    })
    .then(posts => {
      const filteredHappening = posts.filter(post => {
        return post.categories.includes(106);
      });
      return filteredHappening;
    })
    .then(filtered => {
      const postsWithImage = [];
      filtered.forEach(post => {
        const featuredMediaId = post.featured_media;
        const mediaUri = `http://stfchurch.com/wp-json/wp/v2/media/${featuredMediaId}`;

        const id = post.id,
          date = post.date,
          title = post.title.rendered,
          content = post.post_content_plain_text,
          registerLink = post.f1_register_direct_link;

        if (post.categories.includes(106)) {
          fetch(mediaUri)
            .then(response => {
              return response.json();
            })
            .then(mediaObject => {
              const withImage = {
                id,
                date,
                title,
                content,
                image: mediaObject.source_url,
                registerLink,
              };
              postsWithImage.push(withImage);
            });
        }
      });
      // this.setState({ postsWithImage });
      // console.log(postsWithImage);
      return postsWithImage;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
  return get;
}; */

/**
 * async/await attempt below... come back to this later
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
