import React, { Component } from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/postActions'

class ProductList extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    
    render(){

        const data = this.props.posts

        function compare( a, b ) {
            if ( a.price < b.price ){
              return -1;
            }
            if ( a.price > b.price ){
              return 1;
            }
            return 0;
        }
          
        const sorted = data.sort( compare );

        return(
            <ProductListStyled>
                <ul className="grid-wrap">
                    {
                        sorted.map((product, index) => {
                            return(
                                <li key={index}>
                                    <img src={product.photo} alt="product"/>
                                    <div className="product-details">
                                        <a href="/" className="product-name">{product.product_name}</a>
                                        <span className="product-category">{product.category}</span>
                                        <span className="product-price">${product.price}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </ProductListStyled>
        )

    }
}

const ProductListStyled = Styled.div`
    .grid-wrap{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;

        li{
            height:300px;
            margin-bottom:1.5rem;

            img{
                width:100%;
                height:80%;
                object-fit:cover;
                margin-bottom:.25rem;
            }
            .product-details{
                display:flex;
                flex-direction:column;
                position:relative;

                .product-name{
                    font-size:1.2rem;
                    color:#000;
                    margin-bottom:4px;
                }
                .product-category{
                    font-size:1.2rem;
                    color:#aaa;
                }
                .product-price{
                    font-size:1.2rem;
                    color:#000;
                    position:absolute;
                    top:0;
                    right:0;
                }
            }
        }
    }
`

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(ProductList);