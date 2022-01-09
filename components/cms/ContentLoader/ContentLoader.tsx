import React from 'react';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { contentComponentsMap, IProperty, umbracoPageTypes } from 'types/cms';

const componentList = {
  Hero: dynamic(() => import(`../CmsHero`)),
  Image: dynamic(() => import(`../CmsImage`)),
  RichText: dynamic(() => import(`../CmsRichText`)),
};

import s from './ContentLoader.module.scss';

type Props = {
  contentBlocks: IProperty[];
  pageType: keyof typeof umbracoPageTypes;
};

type ContentComponentStrings = keyof typeof contentComponentsMap;
type UmbracoPageTypes = keyof typeof umbracoPageTypes;

const ContentLoader = ({ contentBlocks, pageType }: Props) => {
  const computeContentPageModifier = (
    componentType: ContentComponentStrings,
  ) => {
    const isHeroComponent =
      contentComponentsMap[componentType] ===
      contentComponentsMap.heroWithImageTextCTABlockType;

    const isContentPage =
      umbracoPageTypes[pageType as UmbracoPageTypes] ===
      umbracoPageTypes.contentPageType;

    return isContentPage && !isHeroComponent
      ? `${s.contentPageComponent}`
      : undefined;
  };

  return (
    <>
      {contentBlocks
        ? contentBlocks.map((contentBlock, i) => {
            const contentBlockName =
              contentBlock.type as ContentComponentStrings;
            const component = contentComponentsMap[contentBlockName];

            // Load component dynamically if it recognized the "component"
            const ContentComponent = component
              ? componentList[component]
              : (null as any);

            return (
              <div
                key={i}
                className={cn(
                  s.wrapper,
                  computeContentPageModifier(contentBlockName),
                )}
              >
                {component ? (
                  <ContentComponent
                    content={contentBlock}
                    pageType={pageType}
                  />
                ) : (
                  <p>{contentBlock.type}</p>
                )}
              </div>
            );
          })
        : null}
    </>
  );
};

export default ContentLoader;
