const AboutMeSection = () => {
    return (<>
        <section id="About%20me" className="max-w-screen-lg mx-auto">


            <h2 className="text-4xl mb-8 text-center font-poppins font-medium">About me</h2>
            <div className="grid grid-cols-3 ">
                <div>
                    <img src="/melina_escalante_2.JPG" className="h-75 rounded-full" alt="" />
                </div>  <div className="flex flex-col gap-5 leading-8 p-4 col-span-2">

                    <p>My name is <span className='font-bold  text-sky-400'>Melina Escalante</span>, and my journey in web development began in 2020, during high school, where I graduated with a <span className='font-bold  text-sky-400'>Bachelor's degree in Computer Science</span>. In 2025, I graduated as a <span className='font-bold  text-sky-400'>Full Stack Developer</span> and continue to expand my knowledge in technologies like React.js.</p>
                    <p>I am an ambitious and optimistic person, passionate about challenges and constant learning. My goal is to offer <span className='font-bold  text-sky-400'>efficient and customized solutions</span> to each client.</p>
                    <p>I'm currently seeking my first job opportunity in web development. If you are interested in working with me, <span className='font-bold  text-sky-400'>please don't hesitate to contact me!</span></p>
                </div>


            </div>
        </section>
    </>)
}
export default AboutMeSection