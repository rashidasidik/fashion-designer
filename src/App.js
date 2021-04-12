import useImages from "./hooks/useImages"
import {Card, Container, Spinner, Row,Col } from "react-bootstrsap"

function App() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { error, loading, users } = useImages(url);
  return (
    <Container> 
 
    {loading && <h1>loading...</h1>}
    {error && <h1>OOPS! ERROR</h1>}
  
    <Row>
    {users &&  
       users.map((user) => (
         <Col>
          <Card>
            <Card.Img src={user.thumbnailurl}></Card.Img>
         </Card>
         </Col>

       ))}
       </Row>
       </Container>
     );


  
};

export default App;
