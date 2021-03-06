import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';
import { FC } from 'react';
import BookstoreService from '../../services/bookstore-service';

type WrappedProps = { bookstoreService: BookstoreService };

const WithBookstoreService =
  () => (Wrapped: FC<WrappedProps>) => (props: Record<string, unknown>) =>
    (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          if (bookstoreService !== null) {
            return <Wrapped {...props} bookstoreService={bookstoreService} />;
          }
        }}
      </BookstoreServiceConsumer>
    );

export default WithBookstoreService;
