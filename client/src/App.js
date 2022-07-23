import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const[params, setParams] = useState("");
  const[data, setData] = useState("");

  const url =`https://www.googleapis.com/books/v1/volumes?q=${params}`;
 
  const searchBooks = (event)=> {
      if(event.key === 'Enter') {
        axios.get(url).then((response)=> {
          setData(response.data);
          console.log(response.data);
        })
      }
  }
  return (
    <div className="App">
      <div class ="container">
       <div class="row">
        <div class="col-sm-12">
          <h1 style={{color: "brown"}}>REACT HOOKS FETCH DATA FROM BOOKS API ASSIGNMENT:</h1>

          <h4>Type what to search in the input field and click enter for the table
             to be populated in the table. This can be a topic like dogs, fruits, e.t.c </h4>

        <input
            value={params}
            onChange={event => setParams(event.target.value)}
            onKeyPress={searchBooks}
            placeholder='Search....'
            type="text" /> <br></br> <br></br>

            <div class="row">
              <div class="col-sm-12">


              <tbody>
                <tr>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Publisher</th>
                <th>PublishedDate</th>
                <th>Description</th>
                <th>Author</th>
                </tr>

           
            {data.items?.map((item, i) => (
                <tr key={i}>
                 <td><p style={{color: "red"}}>{item.volumeInfo.title}</p></td>
                 <td><p style={{color: "green"}}>{item.volumeInfo.subtitle}</p></td>
                 <td><p style={{color: "blue"}}>{item.volumeInfo.publisher}</p></td>
                 <td><p style={{color: "red"}}>{item.volumeInfo.publishedDate}</p></td>
                 <td><p style={{color: "green"}}>{item.volumeInfo.description}</p></td>
                 <td>
                 <p>{item.volumeInfo.authors?.map((authors, j)=> (
                   
                   authors
                 
              ))}</p>
                 </td>              
                </tr>

            ))}
              </tbody>
                
              </div>
            </div>
        </div>
       </div>
      </div>

    </div>
  );
}

export default App;
