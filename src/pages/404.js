import * as React from "react"

import Layout from "../components/layout"
import SEO from "../home/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesnt&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
