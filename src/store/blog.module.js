import BlogService from "../services/blog.services";
const initialState = blog
  ? {blog}
  : {blog: null};
export const blog = {
  namespaced: true,
  state: initialState,
  actions: {
    create({ commit }, blog) {
      return BlogService.create(blog).then(
        (blog) => {
          commit("CreatedBlog", blog);
          return Promise.resolve(blog);
        },
        (error) => {
          commit("NotCreated");
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, blog) {
        return BlogService.delete(blog).then(
          (blog) => {
            commit("CreatedBlog", blog);
            return Promise.resolve(blog);
          },
          (error) => {
            commit("NotCreated");
            return Promise.reject(error);
          }
        );
      },
      update({ commit }, blog) {
        return BlogService.update(blog).then(
          (blog) => {
            commit("CreatedBlog", blog);
            return Promise.resolve(blog);
          },
          (error) => {
            commit("NotCreated");
            return Promise.reject(error);
          }
        );
      },
  },
  mutations: {
    CreatedBlog(state, blog) {
      state.blog = blog;
    },
    NotCreated(state) {
      state.blog = null;
    },
  },
};