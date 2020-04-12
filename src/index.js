import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith","pages": 480},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages":304}
]

const Book = ({title,author,pages,freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark? 'yes': 'no'}</p>
    </section>
  )
}

const Hiring = () =>
<div>
<p>The library is hiring. Please call Ms. Getta Ajob at (444) 1212-999.</p>
</div>

const NotHiring = () =>
<div>
  <p>Currently, the librrary is not hiring. But who knows, one day...</p>
</div>

class Library extends Component {
  state = {
    open: false,
    freeBookmark: false,
    hiring: true
  }

  componentDidMount() {
    console.log("The component is now mounted.")
  }

  componentDidUpdate() {
    console.log("The component is updated.")
  }

toggleOpenClosed = () => {
  this.setState(prevState => ({
    open: !prevState.open
  }))
}

  render() {
    const {books} = this.props
  return (
    <div>
      {this.state.hiring? <Hiring /> : <NotHiring />}
    <h1>This library is {this.state.open ? 'open' : 'closed'}</h1>
    <button onClick={this.toggleOpenClosed}>Change</button>
      {books.map(
        (book,i)=>
        <Book
          key={i}
          title={book.title}
          author={book.author}
          pages={book.pages}
          freeBookmark={this.state.freeBookmark}/>
      )}
    </div>
    )
  }
}




// <Book title="The Sun Also Rises" author="Ernest Hemingway" pages={260}/>

ReactDOM.render(
<Library books={bookList} />,
   document.getElementById('root'))
