import {
    FetchPostsByLocation,
    FetchAllPosts,
} from '../../DataStore/store/posts.js'

import GetLocationCoordinates from '../../DataStore/store/places.js';

async function PostsByLocation(location) {
    try {
        const place = await GetLocationCoordinates(location)
        const coordinates = {
            latitude: place[0].latitude,
            longitude: place[0].longitude,
        };
        // console.log(place)
        // console.log(place[0].latitude, place[0].longitude)
        const posts = await FetchPostsByLocation(coordinates);
        return posts
    } catch (error) {
        console.error('failed to fetch posts: ', error.message)
        throw error
    }
};

async function Allposts() {
    try {
        const posts = await FetchAllPosts();
        return posts;
    } catch (error) {
        throw error;
    }
};
// try {
//     const categories = await GetCategories();
//     return categories;
//   } catch (error) {
//     console.error(error)
//   }
export {
    // PostsByCategory,
    PostsByLocation,
    Allposts,
};