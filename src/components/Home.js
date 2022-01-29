import React from "react";
import styles from "styled-components";
import Section from "./Section";
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage="/images/model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImage="/images/model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImage="/images/model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImage="/images/model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImage="/images/solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImage="/images/solar-roof.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImage="/images/accessories.jpg"
                leftButtonText="Shop now"
            />
        </Container>
    );
}

export default Home;

const Container = styles.div`
    height: 100vh;
`;
