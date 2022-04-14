import { Books } from '../components/book-list/book-list';

class BookstoreService {
  data: Books = [
    {
      id: 1,
      title: 'Soul Cats',
      author: 'Tamara Schenk',
      price: 15,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/419SnmBwloL._SX331_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Crafting with Cat Hair',
      author: 'Kaori Tsutaya',
      price: 8,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/51bnOYdu-OL._SX258_BO1,204,203,200_.jpg',
    },
  ];

  getBooks(): Promise<Books> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}

export default BookstoreService;
