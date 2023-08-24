import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function StoreListings() {
  return (
    <div style={{ margin: "auto" }}>
      <h2>Browse stores in New York</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Row>
            <Col xs=".5">
              <Image src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1853/3536532f-668b-4b2c-bf70-63882ad235e7.png" roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/205/3e0e5623-e36a-4d07-9474-c7eac09f8e33.png" roundedCircle />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/231/30647104-9adb-4346-babc-3757295650b8.png" roundedCircle />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}