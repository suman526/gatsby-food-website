import React from 'react'
import Product from '../home/Product';
import Title from '../components/title'
import {StaticQuery, graphql} from 'gatsby'



const getProducts = graphql`
        {
      products:allContentfulWebProduct{
         edges{
             node{
                 id
                 title
                 price
                 image{
                 fluid(maxHeight:426){
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
           }
         }
       } 
        `


export default function Products() {
    return (
        <StaticQuery query={getProducts} render={data => {
            return (<section className="py-5">
                <div className="container">
                    <Title title="Add To Cart" />
                    <div className="row">
                        {data.products.edges.map(({node:product}) =>{
                            return <Product key={product.id} product={product} />;

                        })}
                    </div>
                </div>

            </section>);
        }}  />
    );
}
