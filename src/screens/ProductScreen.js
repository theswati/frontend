// Add page routing
//    1. npm i react-router-dom
//    2. create route for home screen
//    3. create router for product screen



import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams(); // {slug: "ghj"}
  console.log(params)
  // const { slug } = params; // slug = params.slug
  let slug=params.slug
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;


// let obj = {
//   a: 10,
//   b:20
// }

// let x = obj.a 
// let y = obj.b 

// let a = obj.a 
// let b = obj.b 

// let {a:a , b:b} = obj

// let {a,b} = obj