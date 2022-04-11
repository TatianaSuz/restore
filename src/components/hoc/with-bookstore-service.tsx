import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';
import { FC } from 'react';

type WrappedProps = { bookstoreService: Function };

const WithBookstoreService = () => (Wrapped: FC<WrappedProps>) => {
  return (props: {}) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          if (bookstoreService !== null) {
            return <Wrapped {...props} bookstoreService={bookstoreService} />;
          }
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default WithBookstoreService;
