import { ISystem } from 'types/main';

// Umbraco CMS modules and matching React components
export enum contentComponentsMap {
  'accordionModuleLayoutBlock' = 'FAQ',
  'heroWithImageTextCTABlockType' = 'Hero',
  'imageModuleBlockType' = 'Image',
  'productCardBlock' = 'ProductList',
  'teaserModuleLayoutBlockType' = 'TeaserWrapper',
  'textAreaBlockType' = 'RichText',
  'videoModuleBlockType' = 'Video',
  'contactFormBlock' = 'ContactForm',
  'categoryMosaicBlock' = 'CategoryList',
}

// Page types defined in Umbraco
export enum umbracoPageTypes {
  'cartPageType',
  'contentPageType',
  'fourOhFour',
  'globalSearchPageType',
  'orderOverviewPageType',
  'orderReceiptPageType',
  'startPageType',
  'virtualCategoryPageType',
  'virtualCategoryProductListPageType',
  'virtualOrderPageType',
  'virtualProductPageType',
}

export type contentButtonTypes = 'button' | 'primaryButton' | 'secondaryButton';

export type contentComponents =
  | 'accordionModuleBlock'
  | 'blockContent'
  | 'blockContentForLoggedInUsers'
  | 'button'
  | 'header'
  | 'headline'
  | 'image'
  | 'mobileImage'
  | 'paragraph'
  | 'primaryButton'
  | 'primaryImage'
  | 'productCodes'
  | 'secondaryButton'
  | 'text'
  | 'youtubeVideoId'
  | 'categoryId';

export type contentSettings =
  | 'backgroundColor'
  | 'gradientColor'
  | 'headerSize'
  | 'textColor';

export interface IProperty {
  alias?: string;
  type?: string;
  value: any;
}

export interface IContentComponent {
  settings: IComponentOptions[];
  type: string;
  value: IContentIdentifier[];
}

export interface IComponentOptions {
  alias: string;
  value: string;
}

export interface IContentIdentifier {
  alias: string;
  value:
  | string
  | string[]
  | IContentValues
  | IContentValues[]
  | IContentComponent[];
}

export interface IContentValues {
  alt?: string;
  name?: string;
  url: string;
}