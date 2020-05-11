import Link from "next/link";
import React from "react";

const links = [
    {url: '/', label:'Home'},
    {url: '/about', label:'About'},
    {url: '/contact-us', label:'Contact-Us'},
    {url: '/pnp', label:'Privancy and Policy'},
    {url: '/login', label:'Login'},
    {url: '/cart', label:'Cart'},
    {url: '/product-detail', label:'Product Details'},
    {url: '/product-list', label:'Product List'}
]

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    {links.map(({url, label},index)=>(
                        <li key={index}>
                            <Link href={url}>
                                <a>{label}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    )
}

