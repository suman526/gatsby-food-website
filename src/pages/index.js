import * as React from "react"
import Body from "../components/body"
import Layout from "../components/layout"
import Contact from "../pages/contact"
import BackgroundSection from "../components/BackgroundSection";
import Info from "../pages/info"
import { graphql } from "gatsby"
import SEO from "../home/seo"
import Menu from "../home/Menu"
import Products from "../home/Products"
const IndexPage = ({data}) => {
    return (
        <>
        <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`,`react`]}/>
        <BackgroundSection img={data.img.childImageSharp.fluid} title="WOW FOOD" styleClass="default-background" />
        <Info/>
        <Body/>
        <Menu items={data.menu} />
        <Products />
        <Contact/>
        </Layout>
        </>  
    )
}


export const query =graphql`
{
  img:file(relativePath:{eq:"image4.jpg"}) {
    childImageSharp{
  fluid{
  ...GatsbyImageSharpFluid_tracedSVG
  }
    }
    
  }
  menu:allContentfulWebItems{
    edges{
     node{
       id
       title
       description{
         description
       }
       price
       category
       image{
         fixed(width:50,height:50){
           ...GatsbyContentfulFixed
         }
       }
     }
    }
   }

  }
`
export default IndexPage