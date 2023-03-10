import { IRequestBody, ITtnResponseData } from '@/types/ttnTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getTtnApi = createApi({
  reducerPath: 'getTtnApi',
  tagTypes: ['TTN'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.novaposhta.ua/v2.0/json/',
  }),
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
