/* ============================================================
   PROJECTS DATA
   Add / edit projects here.
============================================================ */

const PROJECTS = [
  {
    id: "fire-detection",
    featured: false,
    year: "2023",
    title: "Fire Detection System",
    emoji: "🔥",
    image: "assets/projects/fire-detection.jpg",
    tech: [
      "YOLOv5 object detection model",
      "OpenCV for frame processing",
      "Dijkstra's algorithm for escape routing",
      "Python & PyTorch backend",
    ],
    story: `
      <p>First Project!!!</p>  
      <p>
        It all started with an idea, a classmate named Van Duc, and a mentor named Phung Huu Tai 
        who saw potential we were still trying to locate. The goal was simple: build a real-time 
        fire and smoke detection system, submit it to FAST research competition, and maybe — <em>maybe</em> — win something.
      </p>

      <p>
        The prototype was impressive in spirit, questionable in reality. A camera captures image frames, 
        feeds it to a computer, which then pushes signals to an Arduino driving an 8×8 LED grid — where each light corresponded 
        to a cell on a cardboard map we carved ourselves. Yes, cardboard. Yes, by hand. Yes, we were very proud of it.
      </p>

      <div class="modal-story-media">
        <img src="assets/projects/carving-cardboard.jpg" alt="Carving the cardboard grid" />
      </div>

      <p>
        We pushed through. And by "pushed through" I mean we trained a YOLOv5 model on a custom dataset, 
        spent hours tweaking parameters to reduce false alarms — until the model reached its final form: 
        detecting anything white as fire. Smoke? Fire. My hand? Fire. My future? Unclear, but statistically also fire.
      </p>

      <p>But eventually, we delivered. The prototype demo worked — not perfectly, but it <em>worked</em>. And in that moments, its felt like everything.</p>

      <div class="modal-story-media modal-story-media--row">
        <img src="assets/projects/prototype.jpg" alt="The prototype" />
        <iframe 
          src="https://www.youtube.com/embed/wAbzmogNQYM?si=AMYWJWX91sg4-HQ6"
          title="Prototype demo" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <p>
        Looking back, it wasn't pretty. But it taught us more than any textbook could. 
        And it all started from that cardboard grid sitting on the floor.
      </p>

      <p>
        We wrote our first research paper and took it to our first ever competition. 
        The system was supposed to detect fire and display it across the grid. 
        It did find fire — occasionally/randomly/by accident/against all odds/idk... 
        The judges weren’t impressed enough to give us a nod.
      </p>

      <div class="modal-story-media modal-story-media--row">
        <img src="assets/projects/paper-toc.jpg" alt="Table of contents with our paper" />
        <img src="assets/projects/team-photo.jpg" alt="The team" />
      </div>

      <p>We came, we saw… we went home early.</p>
      <p>
        As result, we didn’t win of course. Not surprising, still a little disappointing. 
        But hey — we got up there, showed something that we built, and watched our model (*bless its heart) try its best (RIP my guy 🙏🙏).
      </p>
      <p>Andddddddddd that ladies and gentlemens</p>
      <p>Our first failed project.</p>
    `,
    images: [],
    link: "",
  },
  {
    id: "breathing-rate",
    featured: false,
    year: "2024",
    title: "Breathing Rate Monitoring",
    emoji: "💨",
    image: "assets/projects/breathing-rate.jpg",
    tech: [
      "rPPG (remote photoplethysmography)",
      "OpenCV & NumPy",
      "Signal filtering (Butterworth)",
      "Frequency domain analysis (FFT)",
    ],
    story: `
      <p>Trial and lot of error</p>
      <p>
        For our second trick, we tried breathing rate recognition using WiFi signals. 
        Yes, WiFi. Invisible radio waves detecting tiny variations caused by your breathing. 
      </p>
      <p>
        Sounds cool, right? It also sounded completely impossible when we first heard about it.
      </p>
      <p>
        Then came the problem: data. To get data, we had to record people breathing through WiFi… 
        which meant figuring out everything—distance, room setup, fan on or off, even random stuff like “did you eat breakfast?”
        ... you get the idea. And honestly? We're still figuring that out.
      </p>
      <p>
        And just when we thought we had enough data to train a model… surprise—we needed more. 
        Which meant more recording. Which meant solving all the same problems again.
      </p>
      <p>
        We basically built ourselves an infinite loop.
      </p>
      <div class="modal-story-media modal-story-media--row">
        <img src="assets/projects/metronome.jpg" alt="Table of contents with our paper" />
        <img src="assets/projects/alone.jpg" alt="The team" />
      </div>
      <p><em>This is our "high-tech" setup. A metronome screen to keep breathing consistent. The second image is for illustrative purposes only.</em></p>
      <p>
        Picture this: a person sitting alone in a closed room, perfectly healthy because they ate their breakfast, 
        all you can hear is the sound of the metronome ticking. Hours of data being recorded. Just breathing. 
        For hours. Alone in a room. With a metronome ticking. It was… an experience.
      </p>
      <p>
        But those data come along with a big problem
      </p>
      <p>
        Our hardware was held together with hopes and duct tape (i meant actual duct tape), 
        our software had more bugs than features (we have no idea how to process a WiFi signal), 
        and the team had serious trust issues about whose data was actually usable. "Your recordings look weird." 
        "No, YOUR recordings look weird." "Did you even calibrate the router?"
      </p>
      <div class="modal-story-media">
        <img src="assets/projects/spiderman.jpg" alt="Its your fault" />
      </div>
      <p>
        Data preparation dragged on forever. Meetings about meetings. Arguments about 
        angles. Debates about breathing patterns. The whole thing took so long, we 
        nearly gave up.
      </p>
      <p>
        Somehow, with our imperfect data and duct-taped setup, we actually got a working 
        model. Not perfect, but real enough to compete with. And we did. We entered 
        competitions. Won some of them too.
      </p>
      <p>
        I even got into a Summer Training Program on Executive Innovation, which sounds 
        impressive until you see what we actually did there.
      </p>
      <div class="modal-story-media">
        <img src="assets/projects/summer-training.jpg" alt="Summer training program shenanigans" />
      </div>
      <p>
        This is from the "Executive Innovation" program. Notice anything? Yeah, that's 
        what I thought too.
      </p>
      <p>
        <strong>The result?</strong> We survived the chaos, won some competitions with 
        our franken-project, and learned that sometimes duct tape and determination 
        beat perfect planning. Also, always eat your breakfast before data collection.
      </p>
    `,
    images: [],
    link: "",
  },
  {
    id: "hand-gesture-glove",
    featured: false,
    year: "2024",
    title: "Hand Gesture Recognition Glove",
    emoji: "🧤",
    image: "assets/projects/hand-gesture-glove.jpg",
    tech: [
      "Arduino-based sensor glove",
      "PCB design and fabrication",
      "Flex sensors",
    ],
    story: `
      <p>School project</p>
      <p>
        This time we doing one of the “legendary” type of project. Those include
      </p>
      <ul>
        <li>- The Smart Trash Can Variations</li>
        <li>- Equipment for People with Disabilities Variations</li>
        <li>- The Traffic System Variations</li>
      </ul>
      <p>
        They show up every year, every competition. Always impressive. Always dramatic.
      </p>
      <p>
        Judges love them. Competitions reward them. Amazing slide presentation.
         Demo works perfectly. And then they retire peacefully, they live their whole 
         life cycle inside PowerPoint.
      </p>
      <p>
        To be fair, most projects in any competition will never see the light of implementation.
        But at least some of them were interesting.
      </p>
      <p>
        Somewhere in that same competition was a team building something weird, creative, 
        something that made you go <em>"huh, I never thought  about that problem before."</em>
        A solution to a problem so niche, so specific, so beautifully unglamorous 
        that you almost respect it. Almost admire it. 
        The kind of project that makes you think someone, somewhere, 
        actually sat down and said <em>"you know what the world needs?"</em> 
        and meant it.
      </p>
      <p>
        And all of that creativity, passion just to be outsmarted by a trash can, not just any trash can, 
        but a <em>smart trash can</em>. 
      </p>
      <div class="modal-story-media">
        <img src="assets/projects/cena.gif" alt="description" loading="lazy" />
      </div>
      <p>
        <em>This is me... defeated by multiple variations of the smart trash can. Speading the hate</em>
      </p>
      <p>
        With all that been said, why do we still pick one of those legendary projects?
      </p>
      <p>
        The same reason as above, judges love them, competitions reward them and because the internet 
        is full of people who already suffered before us. The project probably won’t change the world but
         at least we won’t suffer while building it.
      </p>
      <p>
        Well — I won't suffer. Mostly because my friend Van Duc is doing all the actual work. 
        I didn't even choose this project. I am simply... present. Spiritually supportive. Occasionally making coffee.
      </p>
      <div class="modal-story-media">
        <img src="assets/projects/breadboard.jpg" alt="Van Duc's breadboard" />
      </div>
      <p>
        <em>(Credit: Van Duc - Synopsys Senior Intern and some other guy that help us with the PCB design.)</em>
      </p>
      <p>
        Im just there for the paperwork and the presentation. And to make sure we have enough coffee.
      </p>
      <div class="modal-story-media">
        <img src="assets/projects/report.jpg" alt="The team doing the report" />
      </div>
      <p>And yet</p>
      <p> <strong>AND YET.</strong> </p>
      <p>
        The judges loved it. The competition rewarded it. As the prophecy foretold. Our legendary project win us something.
      </p>
      <div class="modal-story-media">
        <img src="assets/projects/potential-prize.jpg" alt="Us holding the prize" />
      </div>
      <p>
        Honestly we should've done the trash can variation. Knowing our luck, that one might've gotten first prize.
      </p>
    `,
    images: [],
    link: "",
  },
  {
    id: "emotion-recognition",
    featured: true,
    year: "2024",
    title: "WeFineCSI - Emotion Recognition System",
    emoji: "😊",
    image: "assets/projects/emotion-recognition.jpg",
    tech: [
      "Convolutional Neural Network (CNN)",
      "FER-2013 dataset",
      "OpenCV face detection",
      "TensorFlow / Keras",
      "Real-time inference pipeline",
    ],
    story: `
      <p>Building on my computer vision foundation, I developed an emotion recognition system that classifies 7 basic emotions — happy, sad, angry, surprised, fearful, disgusted, and neutral — from facial expressions in real time.</p>
      <p>The model was trained on FER-2013 and augmented with custom data to improve generalization. I integrated it with a live webcam feed and visualized confidence scores for each emotion class.</p>
      <p>One of the biggest challenges was handling partial occlusions and varying lighting. I addressed this with aggressive augmentation and attention mechanisms in the final convolutional layers.</p>
    `,
    images: [],
    link: "https://github.com/minh-quan2811/WeFineCSI",
  },
  {
    id: "rikai-internship",
    featured: false,
    year: "2025",
    title: "RIKAI — AI Internship Project",
    emoji: "🤖",
    image: "assets/projects/rikai.jpg",
    tech: [
      "LangChain & LangGraph orchestration",
      "RAG with vector search",
      "Neo4j graph database",
      "DuckDB for analytics",
      "SQL query layer",
    ],
    story: `
      <p>Internship project</p>
      <p>My first professional AI engineering experience. During the internship at RIKAI, I was embedded in a real product team working on knowledge retrieval systems powered by LLMs.</p>
      <p>I built and iterated on a Retrieval-Augmented Generation (RAG) pipeline, exploring different chunking strategies, embedding models, and retrieval approaches to improve answer quality.</p>
      <p>A highlight was integrating Neo4j to represent domain knowledge as a graph, enabling relationship-aware queries that flat vector search couldn't handle. This became the foundation for the contract role that followed.</p>
    `,
    images: [],
    link: "",
  },
  {
    id: "student-performance",
    featured: false,
    year: "2025",
    title: "SPARK-v1 - Smart Pathway Advisor with Reasoning and Knowledge",
    emoji: "📊",
    image: "assets/projects/student-mgmt.jpg",
    tech: [
      "Python backend (Flask / FastAPI)",
      "Relational database (PostgreSQL / SQLite)",
      "Data visualization dashboard",
      "REST API design",
      "Role-based access control",
    ],
    story: `
      <p>Designed and built a comprehensive student performance tracking system for academic use. The system allows instructors to log grades, attendance, and behavioral notes while giving administrators a macro-level view of cohort performance.</p>
      <p>The dashboard includes trend visualizations — score distributions, improvement over time, at-risk student flagging — making it actionable, not just a data store.</p>
      <p>I focused heavily on clean database schema design and API architecture, with role-based access so students, teachers, and admins each see appropriate views.</p>
    `,
    images: [],
    link: "https://github.com/minh-quan2811/SPARK-v1",
  },
  {
    id: "bone-fracture",
    featured: true,
    year: "2026",
    title: "FracturAInsight - Bone Fracture Detection",
    emoji: "🦴",
    image: "assets/projects/bone-fracture.jpg",
    tech: [
      "Custom CNN architecture",
      "X-ray image preprocessing",
      "Transfer learning (ResNet / EfficientNet)",
      "Grad-CAM visualization",
      "Clinical validation pipeline",
    ],
    story: `
      <p>This is my most technically demanding project to date — applying deep learning to medical imaging for bone fracture detection and classification from X-ray images.</p>
      <p>The model uses transfer learning on top of EfficientNet, fine-tuned on a curated dataset of annotated X-rays. I implemented Grad-CAM to generate visual explanations, making the predictions interpretable for clinical use.</p>
      <p>The ongoing focus is improving robustness on edge cases — subtle hairline fractures, pediatric bones, and images with poor contrast. This project is being developed with the goal of supporting radiologists in under-resourced settings.</p>
    `,
    images: [],
    link: "https://github.com/minh-quan2811/FracturAInsight",
  },
];