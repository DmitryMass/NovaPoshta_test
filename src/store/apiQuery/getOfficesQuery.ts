import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOffices, IOfficesResponse } from '@/types/officesTypes';

export const getOfficesApi = createApi({
  reducerPath: 'getOfficesApi',
  tagTypes: ['Offices'],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getOffices: build.mutation<IOfficesResponse, IOffices>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Offices', id: 'officeId' }],
    }),
  }),
});

export const { useGetOfficesMutation } = getOfficesApi;
