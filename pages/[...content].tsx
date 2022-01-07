import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getContent } from 'lib/api/umbraco-api-server';
import { IFetchError } from 'types/main';

interface Props {
  content: any;
  errorCode: number | null;
}

const CatchAllContent = ({ content, errorCode }: Props) => {
  const contentFields = content.fields?.find(
    (field: any) => field.alias === 'blockContent',
  );

  if (errorCode) {
    return null;
  }

  return (
    <>

    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content } = params as ParsedUrlQuery;
  const contentUrl = (content as string[]).join('/');

  const data = await getContent(contentUrl);

  const error = (data as unknown as IFetchError)?.errorCode;

  if (error === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: data,
      errorCode: error || null,
    },
    revalidate: 60,
  };
};

export default CatchAllContent;
