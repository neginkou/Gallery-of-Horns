import React, { useState } from 'react';
import HornedBeast from './HornedBeasts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Gallery(props) {
  const [filter, setFilter] = useState(0);

  const handleFilterChange = (e) => {
    const selectedFilter = parseInt(e.target.value, 10);
    setFilter(selectedFilter);
  };

  const filteredData = filter === 0 ? props.list : props.list.filter(item => item.horns === filter);

  return (
    <>
      <div>
        <Form>
          <Form.Group controlId="filterForm.ControlSelect">
            <Form.Label><h2>Filter by Horns:</h2></Form.Label>
            <Form.Control as="select" onChange={handleFilterChange}>
              <option value={0}>All</option>
              <option value={1}>One Horn</option>
              <option value={2}>Two Horns</option>
              <option value={3}>Three Horns</option>
              <option value={100}>100 Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
          {filteredData.map((hornedBeast, index) => (
            <Col key={index} style={{ margin: "15px" }}>
              <HornedBeast
                key={index}
                title={hornedBeast.title}
                _id={hornedBeast._id}
                imageUrl={hornedBeast.image_url}
                description={hornedBeast.description}
                keyword={hornedBeast.keyword}
                horns={hornedBeast.horns}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;