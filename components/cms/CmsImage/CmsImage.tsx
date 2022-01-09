import cn from 'classnames';
import { IContentComponent, IContentValues } from 'types/cms';
import { getContentComponent } from 'utils/content-utils';

import Image from 'components/ui/Image';

import s from './CmsImage.module.scss';

type Props = {
  className?: string;
  content: IContentComponent;
};

const CmsImage = ({ className, content }: Props) => {
  const primaryImage = getContentComponent(content, 'image')
    ?.value as IContentValues;

  return primaryImage ? (
    <div className={s.wrapper}>
      <Image
        className={cn(s.image, className)}
        imageProps={{
          alt: primaryImage.alt,
          layout: 'fill',
          objectFit: 'cover',
          src: primaryImage.url,
        }}
      />
    </div>
  ) : null;
};

export default CmsImage;
