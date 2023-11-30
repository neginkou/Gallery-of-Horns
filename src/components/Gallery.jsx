import React from 'react';
import HornedBeast from './HornedBeasts.jsx';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gallery(props){
  return (
    <Container>
      <Row md={2}>
      {
            props.list.map((hornedBeast, index)=>
            <HornedBeast 
            key={index}
            title={hornedBeast.title}
            _id={hornedBeast._id}
            imageUrl={hornedBeast.image_url}
            description={hornedBeast.description}
            keyword={hornedBeast.keyword}
            horns={hornedBeast.horns}

            />
            )
        }

      </Row>
    </Container>
    
  );
}

export default Gallery;
