
import Carousel from './components/Carousel';
import './App.css';
import Form from './components/Form';
const slides = [
  "https://images.unsplash.com/photo-1563257567-242c0e4bef72?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29saWQlMjBkYXJrJTIwYW5kJTIwYmx1ZSUyMG5hdHVyZSUyMG1vdW50YWlucyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1712107652566-7b11b75a15a1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbGlkJTIwZGFyayUyMGFuZCUyMGJsdWUlMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1652794773884-bd659391c605?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbGlkJTIwZGFyayUyMGFuZCUyMGJsdWUlMjBuYXR1cmUlMjBtb3VudGFpbnMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
]

function App() {
  return (
    <div className='md:p-16 p-2 grid grid-cols-1 place-items-center align-items-center justify-items-center min-h-screen'>
    <div className="grid lg:grid-cols-2 rounded-xl place-items-center h-full shadow-lg " style={{backgroundColor:"#312D40"}} >
     
     <div className="md:m-4 m-2 py-4  h-full">
      <Carousel slides={slides}/>
    </div>
    <div className="md:m-4 m-2">
    <Form/>
    </div>
     
    </div>
    </div>
  );
}

export default App;
