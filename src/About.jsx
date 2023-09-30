import './index.css'
import photo from './assets/Photo.png'
import resume from './assets/resume-example.pdf'

function About(){

    const redirect =() => {
        location.href='#contact';
    }

    const download = ()=>{
        window.open(resume)
    }

    return(
        <>
        <section id="about">
            <div class="heading">About Me</div>
            <div class="about_container">
                <div><img src={photo} width='350px'/></div>
                <div>
                    <p class="about_text">Hello, I'm </p>
                    <h1 class="about_text">Kollakota Siva Sai</h1>
                    <button class="about_buttons" onClick={download}>Resume</button>
                    <button class="about_buttons"  onClick={redirect}>Contact Info</button>
                </div>
            </div>    
        </section>
        </>
    )
}

export default About