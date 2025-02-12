import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sam Chutter - Web Developer</title>
                <meta name="description" content="Sam Chutter is a front-end web developer specializing in building visually engaging and functional websites. Explore projects, skills, and testimonials." />
                <meta name="keywords" content="Sam Chutter, web developer, front-end developer, portfolio, web design, coding, JavaScript, React, HTML, CSS" />
                <meta name="author" content="Sam Chutter" />
                <link rel="canonical" href="https://www.samchutter.dev/" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Sam Chutter - Web Developer" />
                <meta property="og:description" content="Discover Sam Chutter's portfolio showcasing expertise in front-end development, tech stack, and creative projects." />
                <meta property="og:image" content="https://www.samchutter.dev/img/social-preview.jpg" />
                <meta property="og:url" content="https://www.samchutter.dev/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sam Chutter - Web Developer" />
                <meta name="twitter:description" content="Explore the portfolio and skills of Sam Chutter, a creative web developer specializing in functional and aesthetic design." />
                <meta name="twitter:image" content="https://www.samchutter.dev/img/social-preview.jpg" />
            </Head>

            <body className="bg-black text-white">
                {/* Navbar */}
                <nav className="relative flex justify-center items-center p-4 md:p-6 bg-gray-900 rounded-lg">
                    <ul className="hidden md:flex justify-center items-center gap-8 p-2">
                        {['Home', 'Projects', 'Tech stack', 'Testimonials', 'About me', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition duration-200">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hero Section */}
                <section id="home" className="flex flex-col justify-center items-center h-80 bg-cover bg-center p-4 md:p-10">
                    <h1 className="text-3xl md:text-6xl font-bold">Sam Chutter</h1>
                    <h3 className="text-gray-400 text-lg">Front-End Developer</h3>
                </section>

                {/* Projects Section */}
                <section id="projects" className="p-6">
                    <h2 className="text-3xl text-center mb-6">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{/* Project Cards here */}</div>
                </section>

                {/* About Section */}
                <section id="about" className="p-6">
                    <h2 className="text-3xl text-center mb-6">About</h2>
                    <p className="text-lg">I'm a senior in the Digital Media program at Texas State University...</p>
                </section>
            </body>
        </>
    );
}