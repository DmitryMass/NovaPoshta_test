import { IRequestBody, ITtnResponseData } from '@/types/ttnTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getTtnApi = createApi({
  reducerPath: 'getTtnApi',
  tagTypes: ['TTN'],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getTtnInfo: build.mutation<ITtnResponseData, IRequestBody>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'TTN', id: 'ttnId' }],
    }),
  }),
});

export const { useGetTtnInfoMutation } = getTtnApi;
