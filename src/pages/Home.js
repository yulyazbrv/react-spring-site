import React, { useState } from 'react'
import {Footer} from '../components/Footer/Footer'
import {Header} from '../components/Header/Header'
import {Main} from '../components/Main'
import springBoot from "../images/spring-boot.svg"
import springFramework from "../images/spring-framework.svg"
import springData from "../images/spring-data.svg"
import springCloud from "../images/spring-cloud.svg"
import springDataFlow from "../images/spring-data-flow.svg"
import springSecurity from "../images/spring-security.svg"
import springGraphql from "../images/spring-graphql.svg"
import logoSession from "../images/logo-session.png"

function Home() {
    const projects = [
        {
            img: springBoot,
            name: "Spring Boot",
            info: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible"
        },
        {
            img: springFramework,
            name: "Spring Framework",
            info: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more."
        },
        {
            img: springData,
            name: "Spring Data",
            info: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
        },
        {
            img: springCloud,
            name: "Spring Cloud",
            info: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices."
        },
        {
            img: springDataFlow,
            name: "Spring Cloud Data",
            info: "Provides an orchestration service for composable data microservice applications on modern runtimes."
        },
        {
            img: springSecurity,
            name: "Spring Security",
            info: "Protects your application with comprehensive and extensible authentication and authorization support."
        },
        {
            img: springGraphql,
            name: "Spring for GraphQL",
            info: "Spring for GraphQL provides support for Spring applications built on GraphQL Java."
        },
        {
            img: logoSession,
            name: "Spring Session",
            info: "Provides an API and implementations for managing a user’s session information."
        }];
    
    const firstMenuItems = [
        { name: "Overview" },
        { name: "Microservices" },
        { name: "Reactive" },
        { name: "Event Driven" },
        { name: "Cloud" },
        { name: "Web Applications" },
        { name: "Serverless" },
        { name: "Batch" }
    ];

    const secondMenuItems = [
        { name: "Overview" },
        { name: "Quickstart" },
        { name: "Guides" },
        { name: "Blog" }
    ];

    const thirdMenuItems = [
        { name: "Overview" },
        { name: "Spring Boot" },
        { name: "Spring Framework" },
        { name: "Spring Cloud" },
        { name: "Spring Cloud Data Flow" },
        { name: "Spring Data" },
        { name: "Spring Integration" },
        { name: "Spring Batch" },
        { name: "Spring Security" }
    ];

    return (
       <div>
            <Header firstMenu={firstMenuItems} secondMenu={secondMenuItems} thirdMenu={thirdMenuItems} />
            <Main projects={projects}/>
            <Footer />
       </div>
    )
}

export default Home