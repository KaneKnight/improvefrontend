import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient} from '../withApollo';
import type { NormalizedCacheObject } from '@apollo/client';
export async function getServerPageArticles
    (options: Omit<Apollo.QueryOptions<Types.ArticlesQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ArticlesQuery>({ ...options, query:Operations.ArticlesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useArticles = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ArticlesQuery, Types.ArticlesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ArticlesDocument, options);
};
export type PageArticlesComp = React.FC<{data?: Types.ArticlesQuery, error?: Apollo.ApolloError}>;
export const withPageArticles = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ArticlesQuery, Types.ArticlesQueryVariables>) => (WrappedComponent:PageArticlesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ArticlesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrArticles = {
      getServerPage: getServerPageArticles,
      withPage: withPageArticles,
      usePage: useArticles,
    }