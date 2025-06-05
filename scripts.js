document.addEventListener('DOMContentLoaded', () => {
    // Definimos las entradas del blog en un array de objetos
    const blogPosts = [
        {
            id: 1,
            title: 'Family and Hobbies: Conversations that connect',
            date: 'May 15, 2025',
            tags: 'Home, Motivation, English',
            summary: 'Learning English feels much more natural when I connect it with what I like most. I recorded audios with friends and families, describing our favorite hobbies, how play billiard, soccer, bolirana.',
            content: 'Learning English feels much more natural when I connect it with what I like most. I recorded audios with friends and families, describing our favorite hobbies, how play billiard, soccer, bolirana. Also, I wrote text on my traditions and familiars; I helped to expand my vocabulary with relationships and home. It is amazing that something so personal can be a tool of learning so powerful!'
        },
        {
            id: 2,
            title: 'The starting point: Why English, and how to start?',
            date: 'April 10, 2025',
            tags: 'Home, Motivation, English',
            summary: 'Always fascinated by the idea of connecting with people and different cultures, and English is a global idiom; it would seem too perfect a gate to enter.',
            content: 'Always fascinated by the idea of connecting with people and different cultures, and English is a global idiom; it would seem too perfect a gate to enter. My journey can’t start with a boring book of grammar if not with curiosity. I remember my first intents of understand audios of songs or videos the my favorite series in original idiom. Was frustrating some times, but also incredible motivate see little improvements. The beginning, my strategy was simple: immerse myself. Although not live in a country the speaking english, I tried to create an environment in which English was present. This means changing my usual things for some in English, watching movies with subtitles in English, and searching text samples for reading. It was a chaotic but organic start and laid the foundations to come later.'
        },
        {
            id: 3,
            title: 'English in Action: From work to travel and actuality',
            date: 'March 18, 2025',
            tags: 'Home, Motivation, English',
            summary: 'My job has an excellent opportunity for practicing English, especially to read articles and reports and participate in virtual reunions.',
            content: 'My job has an excellent opportunity for practicing English, especially to read articles and reports and participate in virtual reunions. It helps me become familiarized with the terminology specific to my field and upgrade my ability for presentation ideas of clear form. When it comes to travel, the English is indispensable! I create short videos of my experience, practice how to give directions, make reservations, or simply talk with the people. Each adventure becomes a lesson in English particles and is memorable. Also one of the most effective to keep my English up date is by consuming news and discussions about current events. I listen to news, watch documentary videos, and read text of international articles. But it also allows me to form my own opinion about what is happening in the world.'
        },
        {
            id: 4,
            title: 'Critical Thinking and Media Literacy: Navigating the Information Age',
            date: 'February 6, 2025',
            tags: 'Home, Motivation, English',
            summary: 'In today\'s fast-paced world, being able to think critically and understand media literacy is more important than ever.',
            content: 'In today\'s fast-paced world, being able to think critically and understand media literacy is more important than ever. As I\'ve improved my English, I\'ve used it to explore how information is presented and consumed across various media. I\'ve watched videos analyzing different news sources, listened to audios discussing logical fallacies in political speeches, and read written texts on the psychology of persuasion in advertising. This process has not only enhanced my language skills but also sharpened my ability to discern reliable information from misinformation.'
        },
        {
            id: 5,
            title: 'Crime and Punishment: Language as a Lens on Society',
            date: 'January 11, 2025',
            tags: 'Home, Motivation, English',
            summary: 'Exploring the complex concepts of crime and punishment in English has been a profound learning experience, offering much more than just vocabulary expansion.',
            content: 'Exploring the complex concepts of crime and punishment in English has been a profound learning experience, offering much more than just vocabulary expansion. I\'ve delved into classic literature through written texts, such as excerpts from famous crime novels, watched videos of documentaries on legal systems around the world, and listened to audios of true crime podcasts that analyze cases from different perspectives. This immersion has not only broadened my English vocabulary related to law and justice but also deepened my understanding of societal structures and ethical dilemmas.'
        },
        {
            id: 6,
            title: 'Challenge my own limits: My first creative project in English',
            date: 'December 7, 2024',
            tags: 'Home, Motivation, English',
            summary: 'I decided it was time to go forward with daily practice and throw myself into a project that would really challenge me.',
            content: 'I decided it was time to go forward with daily practice and throw myself into a project that would really challenge me. I chose to create a short documentary of 5 minutes about a day typical in my original town, narrated only in English. The idea was simple, but the execution was a fascinating challenge. I had to write the script, record the voice-over, and edit the video, all while focusing on using natural English expressions. This project pushed me out of my comfort zone and solidified my confidence in using English for creative expression.'
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts-container');
    const singlePostCard = document.getElementById('single-post-card');

    // Función para renderizar una tarjeta de post en la página principal
    function renderPostCard(post) {
        const postCard = document.createElement('div');
        postCard.classList.add('blog-post-card');
        postCard.innerHTML = `
            <h2>${post.title}</h2>
            <p>Published on ${post.date} | Tags: ${post.tags}</p>
            <p class="summary">${post.summary}</p>
            <a href="post.html?id=${post.id}" class="read-more-btn">Leer más</a>
        `;
        blogPostsContainer.appendChild(postCard);
    }

    // Lógica para la página principal (index.html)
    if (blogPostsContainer) {
        blogPosts.forEach(renderPostCard);
    }

    // Lógica para la página de detalle (post.html)
    if (singlePostCard) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id')); // Obtener el ID de la URL

        const post = blogPosts.find(p => p.id === postId); // Buscar la entrada por ID

        if (post) {
            singlePostCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>Published on ${post.date} | Tags: ${post.tags}</p>
                <p class="summary">${post.summary}</p>
                <div class="full-content">
                    <p>${post.content}</p>
                </div>
                <button class="toggle-content-btn" data-action="expand">Ampliar</button>
                <button class="toggle-content-btn" data-action="minimize" style="display:none;">Minimizar</button>
            `;

            const expandBtn = singlePostCard.querySelector('[data-action="expand"]');
            const minimizeBtn = singlePostCard.querySelector('[data-action="minimize"]');
            const fullContent = singlePostCard.querySelector('.full-content');
            const summaryContent = singlePostCard.querySelector('.summary');

            // Inicialmente, mostrar el resumen y el botón "Ampliar"
            summaryContent.style.display = 'block';
            fullContent.style.display = 'none';
            expandBtn.style.display = 'inline-block';
            minimizeBtn.style.display = 'none';

            expandBtn.addEventListener('click', () => {
                singlePostCard.classList.add('expanded');
                summaryContent.style.display = 'none';
                fullContent.style.display = 'block';
                expandBtn.style.display = 'none';
                minimizeBtn.style.display = 'inline-block';
            });

            minimizeBtn.addEventListener('click', () => {
                singlePostCard.classList.remove('expanded');
                summaryContent.style.display = 'block';
                fullContent.style.display = 'none';
                expandBtn.style.display = 'inline-block';
                minimizeBtn.style.display = 'none';
            });

        } else {
            singlePostCard.innerHTML = '<p>Lo sentimos, la entrada no fue encontrada.</p>';
        }
    }

    
});
