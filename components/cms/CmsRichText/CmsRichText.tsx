import cn from 'classnames';
import { IContentComponent } from 'types/cms';

import s from './CmsRichText.module.scss';
s;

type Props = {
  className?: string;
  content: IContentComponent | string;
};

const CmsRichText = ({ content, className }: Props) => {
  const getContentObjectValue =
    typeof content !== 'string' && content?.value.length > 0
      ? content.value[0].value
      : null;
  const richTextContent = getContentObjectValue || content;

  if (richTextContent === null) {
    return null;
  }

  return (
    <div
      className={cn(s.wrapper, className)}
      dangerouslySetInnerHTML={{ __html: richTextContent as string }}
    />
  );
};

export default CmsRichText;
