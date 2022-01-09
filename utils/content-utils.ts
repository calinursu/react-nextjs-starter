import {
  contentComponents,
  contentSettings,
  IContentComponent,
} from 'types/cms';

export const getContentComponent = (
  content: IContentComponent,
  alias: contentComponents,
) => {
  return content.value?.find((component) => alias === component.alias);
};

export const getComponentSetting = (
  content: IContentComponent,
  alias: contentSettings,
) => {
  return content.settings?.find((component) => alias === component.alias);
};