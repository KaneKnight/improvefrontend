import { type } from "os"
import { ArticlesQuery } from '../generated/graphql';
import { DeepExtractType, DeepExtractTypeSkipArrays }from 'ts-deep-extract-types';


export type Article = DeepExtractTypeSkipArrays<ArticlesQuery, ['articles']>;