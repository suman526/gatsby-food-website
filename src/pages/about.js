import * as React from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../home/seo"
import BackgroundSection from "../components/BackgroundSection";
import Info from "../pages/info"
const AboutPage = ({data}) => {
    return (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`,`react`]}/>
  <BackgroundSection img={data.img.childImageSharp.fluid} title="About Us" styleClass="about-background" />
    <Info />
  </Layout>
);
    };

export const query = graphql`
{
img:file(relativePath:{eq:"about.jpg"}) {
  childImageSharp{
fluid{
...GatsbyImageSharpFluid
}
  }
  
}
}
`


export default AboutPage
