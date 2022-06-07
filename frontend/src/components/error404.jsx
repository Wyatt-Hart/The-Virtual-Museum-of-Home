import Def from '../default'
const React = require('react')

export default function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/404.jpg" alt="Page Not Found" />
                <p>This page does not exist</p>
            </main>
        </Def>
    )
}