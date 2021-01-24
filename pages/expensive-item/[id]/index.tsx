import { ExpensiveItem } from '@components/expensiveItem';
import { Header } from '@components/header';
import { getFromCollectionById } from '@server/services/getFromCollectionById';
import { Item as ItemInterface } from '@types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  if (params) {
    const { id } = params;
    if (id && typeof id === 'string') {
      try {
        const data = await getFromCollectionById('items', id);
        return { props: { itemJSON: JSON.stringify(data), error: null } };
      } catch (error) {
        return { props: { itemJSON: null, error: error.message } };
      }
    }
  }
  return { props: { itemJSON: null, error: 'No params' } };
};

const Item = ({
  itemJSON,
  error,
}: {
  itemJSON: string;
  error: string;
}): React.ReactElement | null => {
  if (!itemJSON || error) {
    return null;
  }
  const item: ItemInterface = JSON.parse(itemJSON);
  if (!item) {
    return <div>Nothing to see here</div>;
  }
  return (
    <>
      <Header showOuterHeader={false} />
      <ExpensiveItem item={item} />
    </>
  );
};

export default Item;
