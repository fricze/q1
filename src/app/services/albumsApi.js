import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (page = 1) => `albums?_page=${page}&_limit=10`,
      providesTags: ['Albums'],
    }),

    createAlbum: builder.mutation({
      query: (title) => ({
        url: 'albums',
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Albums'],
    }),

    updateAlbum: builder.mutation({
      query: ({ id, title }) => ({
        url: `albums/${id}`,
        method: 'PUT',
        body: { title },
      }),
      invalidatesTags: ['Albums'],
    }),

    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `albums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Albums'],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useCreateAlbumMutation,
  useUpdateAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
