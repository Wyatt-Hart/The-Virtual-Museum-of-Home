import Def from './default'
const React = require('react')

export default function Home () {
   return (
        <Def>
            <main className='museum'>
                <section class='image-grid'>
                    <div class='row'>
                        <div class='column'>
                            <img src={require('../images/entries/Abraham_Lincoln.png')} alt='Abraham Lincoln'></img>
                            <img src={require('../images/entries/Alexander_Graham_Bell.png')} alt='Alexander Graham Bell'></img>
                            <img src={require('../images/entries/Charles_G_Finney.png')} alt='Charles G Finney'></img>
                            <img src={require('../images/entries/Dorothea_Dix.png')} alt='Dorothea Dix'></img>
                            <img src={require('../images/entries/Eleanor_Roosevelt_UDHR.png')} alt='Eleanor Roosevelt'></img>
                            <img src={require('../images/entries/Frederick_Douglass.png')} alt='Frederick Douglas'></img>
                            <img src={require('../images/entries/Harriet_Tubman.png')} alt='Harriet Tubman'></img>
                        </div>
                        <div class='column'>
                            <img src={require('../images/entries/Hatred.png')} alt='Hatred'></img>
                            <img src={require('../images/entries/Hiram_Rhodes_Revels.png')} alt='Hiram Rhodes Revels'></img>
                            <img src={require('../images/entries/J_P_Morgan.png')} alt='J P Morgan'></img>
                            <img src={require('../images/entries/Jacobson_vs_Massachusetts.png')} alt='Jacobson vs Massachusetts'></img>
                            <img src={require('../images/entries/Jefferson_Davis.png')} alt='Jefferson Davis'></img>
                            <img src={require('../images/entries/John_Brown.png')}  alt='John Brown'></img>
                            <img src={require('../images/entries/William_James.png')} alt='William James'></img>
                        </div>
                        <div class='column'>
                            <img src={require('../images/entries/Laura_Cornelius_Kellogg.png')} alt='Laura Cornelius Kellogg'></img>
                            <img src={require('../images/entries/Mark_Twain.png')} alt='Mark Twain'></img>
                            <img src={require('../images/entries/Mary_Tape.png')} alt='Mary Tape'></img>
                            <img src={require('../images/entries/Samuel_Morse.png')} alt='Samuel Morse'></img>
                            <img src={require('../images/entries/The_Gilded_Age.png')} alt='The Gilded Age'></img>
                            <img src={require('../images/entries/The_Telegraph.png')} alt='The Telegraph'></img>
                            <img src={require('../images/entries/The-Transcontinental-Railroad.png')} alt='The Transcontinental Railroad'></img>
                        </div>
                        <div class='column'>
                            <img src={require('../images/entries/Hatred.png')} alt='Hatred'></img>
                            <img src={require('../images/entries/Hiram_Rhodes_Revels.png')} alt='Hiram Rhodes Revels'></img>
                            <img src={require('../images/entries/J_P_Morgan.png')} alt='J P Morgan'></img>
                            <img src={require('../images/entries/Jacobson_vs_Massachusetts.png')} alt='Jacobson vs Massachusetts'></img>
                            <img src={require('../images/entries/Jefferson_Davis.png')} alt='Jefferson Davis'></img>
                            <img src={require('../images/entries/John_Brown.png')}  alt='John Brown'></img>
                            <img src={require('../images/entries/William_James.png')} alt='William James'></img>
                        </div>
                    </div>
                </section>
            </main>
        </Def>
   )
}