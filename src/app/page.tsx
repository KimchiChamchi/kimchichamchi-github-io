"use client";

import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: "와우펜션",
        description: "펜션 소개 웹페이지",
        imageUrl: "/images/TP1.png",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Firebase"],
        githubLink: "https://github.com/KimchiChamchi/WOW_Pension/",
    },
    {
        title: "싸커킥",
        description: "팀을 이루고 서로 경기 일정을 잡을 수 있는 축구 커뮤니티 사이트",
        imageUrl: "/images/TP2.png",
        technologies: ["JavaScript", "EC2", "RDS", "Node.js", "Express", "Sequelize"],
        githubLink: "https://github.com/imysh578/SoccerKick/",
    },
    {
        title: "PL2H World",
        description: "커플들을 위한 SNS 웹페이지",
        imageUrl: "/images/TP3.png",
        technologies: ["JavaScript", "React", "EC2", "RDS", "Node.js", "Express", "Sequelize"],
        githubLink: "https://github.com/pl2hteam/pl2hproject/",
    },
    {
        title: "블록체인 구조 이해하기",
        description: "Naive 코인을 활용해 채굴과 트랜잭션을 해보는 것으로 웹소켓과 작업증명(PoW)방식 이해하기",
        imageUrl: "/images/PoW.png",
        technologies: ["JavaScript", "React", "MySQL", "WebSocket", "Node.js", "Express", "Sequelize"],
        githubLink: "https://github.com/KimchiChamchi/blockchainPJ_2201/",
    },
    {
        title: "DOREMI GAMES",
        description: "P2E 게임 웹페이지",
        imageUrl: "/images/TP4.png",
        technologies: ["JavaScript", "React", "MySQL", "WebSocket", "Node.js", "Express", "Sequelize"],
        githubLink: "https://github.com/domisolidity/NFT_GAME/",
    },
];

export default function Home() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800">
            <nav className="navbar-wrapper w-4/5 max-w-6xl mx-auto flex justify-between items-center py-4 border-b border-gray-300">
                <div className="name text-2xl font-bold text-gray-900">KimchiChamchi</div>
                <div className="links-wrapper flex space-x-4">
                    <button
                        onClick={() => scrollToSection("about-section")}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection("projects-section")}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("contact-section")}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Contact
                    </button>
                </div>
            </nav>

            <header id="home-section" className="header-wrapper w-4/5 max-w-6xl mx-auto text-center py-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Hello, I'm KimchiChamchi.</h1>
            </header>

            <section id="about-section" className="w-4/5 max-w-6xl mx-auto py-12 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                <img src="/images/profile.jpg" alt="Profile" className="w-full max-w-md mx-auto mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed">
                    저는 주로 <b>Node.js</b>, <b>Express</b>, <b>MySQL</b>, <b>PHP</b>를 활용한 웹 프로젝트 개발을 하고
                    있습니다.
                    <br />
                    <b>React</b>와 <b>Next.js</b>를 이용한 프론트엔드 개발에도 익숙하며, <b>Solidity</b>를 활용한 스마트
                    컨트랙트 개발, <b>Firebase</b>, <b>AWS</b>를 이용한 서비스 경험이 있습니다.
                    <br />
                    새로운 기술을 배우고 적용하는 것을 즐기며, 사용자에게 가치 있는 서비스를 만드는 데 열정을 가지고
                    있습니다.
                </p>
            </section>

            <main id="projects-section" className="flex flex-col items-center w-4/5 max-w-6xl mx-auto py-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            githubLink={project.githubLink}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </main>

            <section id="contact-section" className="w-4/5 max-w-6xl mx-auto py-12 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    010-7193-0438
                    <br />
                    esm2103@gmail.com
                </p>
                <div className="mt-8">
                    <a
                        href="https://github.com/KimchiChamchi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700 transition-colors"
                    >
                        Visit my GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}
