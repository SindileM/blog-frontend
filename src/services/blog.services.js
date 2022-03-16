import axios from 'axios';
import authHeader from './auth-header';
// const API_URL = 'https://surfstore-backend.herokuapp.com/products/';
class BlogService{
  async create(blog) {
    return axios
      .post(API_URL, {
        title: blog.title,
        category: blog.category,
        description: blog.description,
        img: product.img,
      },
      { headers: authHeader() })
  }
  delete(blog) {
      return axios
        .delete(API_URL + blog, { headers: authHeader() })
  }
  update(blog) {
    return axios
      .patch(API_URL + blog._id,{
        title: blog.title,
        category: blog.category,
        description: blog.description,
        img: product.img,
      }, 
        { headers: authHeader() })
}
};

export default new BlogService();