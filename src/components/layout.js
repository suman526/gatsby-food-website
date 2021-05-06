import React from "react"
import PropTypes from "prop-types" 
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/theme.scss"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>  
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired
}
export default Layout