import React from 'react';
import Image from '.';

export default {
  title: 'Components/Image',
  component: Image,
};

const TestData = {
  type: 'imageModuleBlockType',
  value: [
    {
      alias: 'image',
      value: {
        alt: 'Logo',
        url: 'https://webapp-we-shop-umbraco-daily.azurewebsites.net/media/svodm443/lmfull.svg?mode=crop&quality=90&height=0&width=0&left=0.5&top=0.5',
      },
    },
  ],
};

export const First = () => <Image content={TestData as any} />;
