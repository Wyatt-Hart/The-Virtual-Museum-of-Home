import Def from './default'
const React = require('react')

export default function Home () {
   return (
       <Def>
           <main className='home'>
               <h1>The Virtul Museum of Home</h1>
               <section class="image-grid">
                  <div class="image__cell is-collapsed">

                    <div class="image--basic">
                        <a href="#expand-jump-1">
                        <img id="expand-jump-1" class="basic__img" src="http://placehold.jp/150x150.png" alt="Fashion 1" />
                        </a>
                        <div class="arrow--up"></div>
                    </div>

                    <div class="image--expand">
                        <a href="#close-jump-1" class="expand__close"></a>
                        <img class="image--large" src="http://placehold.jp/150x150.png" alt="Fashion 1" />
                    </div>

                  </div>
                </section>
           </main>
       </Def>
   )
}