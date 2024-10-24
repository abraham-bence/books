import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { elementAt } from 'rxjs';
import { Book } from './entities/book.entity';

const books : Book[] = [
  {
    id : 1,
    title : "book",
    author : "béla",
    isbn : "1234",
    publishYear : 2007,
    reserved : true
  },
  {
    id : 2,
    title : "book2",
    author : "laci",
    isbn : "2341",
    publishYear : 1989,
    reserved : false
  }
]

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    let index = books[books.length-1].id + 1;
    const newBook : Book = {
      id : index,
      title : createBookDto.title,
      author : createBookDto.author,
      isbn : createBookDto.isbn,
      publishYear : createBookDto.publishYear,
      reserved : false
    }
    books.push(newBook)
    return ;
  }

  findAll() {
    return books;
  }

  findOne(id: number) {
    if()
    return books[findIndex(id).index];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    for (const [key, value] of Object.entries(updateBookDto)) {
      books[findIndex(id).index][key] = value;
    }
    return this.findOne(id)
  }

  remove(id: number) {
    const index = findIndex(id).index
    if(index != -1){
      const removed = books.splice(index,1)
      UpdateId()
      return `Removed #${id} book`;
    }
    else{
      return `#${id} book doesn't exist`
    }
  }
}
function UpdateId(){
  let id = 1
  books.forEach((book : Book) => {
    book.id = id
    id++;
  })
}

function findIndex(id : number){
  let index = -1
    const filteredObj = books.find(function(item, i){
      if(item.id === id){
        index = i;
        return i;
      }
    });
  return {
    objekt : filteredObj,
    index
  };
}
