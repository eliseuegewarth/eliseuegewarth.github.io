var DIR = 'img/';

var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {
    var DIR = 'img/';
    nodes = [{
            id: 1,
            image: DIR + 'python_language.png',
            label: "Python",
            group: "Programação"
        },{
            id: 2,
            image: DIR + 'bash_language.png',
            label: "Bash Script",
            group: "Programação"
        },{
            id: 3,
            image: DIR + 'javascript_language.png',
            label: "Javascript",
            group: "Programação"
        },{
            id: 4,
            image: DIR + 'java_language.jpg',
            label: "Java",
            group: "Programação"
        },{
            id: 5,
            image: DIR + 'php_language.jpg',
            label: "PHP",
            group: "Programação"
        },{
            id: 6,
            image: DIR + 'cpp_language.png',
            label: "C/C++",
            group: "Programação"
        },{
            id: 8,
            image: DIR + 'devops.png',
            label: "Cultura DevOps",
            group: "Gerência de Configuração de Software"
        },{
            id: 9,
            image: DIR + 'django_framework.png',
            label: "Django Framework",
            group: "Programação"
        },{
            id: 10,
            image: DIR + 'drf.png',
            label: "Django Rest (DRF)",
            group: "Programação"
        },{
            id: 11,
            image: DIR + 'brain.png',
            label: "Programação Defensiva",
            group: "Qualidade de Software"
        },{
            id: 12,
            image: DIR + 'brain.png',
            label: "Técnicas de Programação",
            group: "Qualidade de Software"
        },{
            id: 13,
            image: DIR + 'brain.png',
            label: "Testes Unitários",
            group: "Qualidade de Software"
        },{
            id: 14,
            image: DIR + 'brain.png',
            label: "Testes de Integração",
            group: "Qualidade de Software"
        },{
            id: 15,
            image: DIR + 'brain.png',
            label: "Testes de Carga",
            group: "Qualidade de Software"
        },{
            id: 16,
            image: DIR + 'brain.png',
            label: "Testes de Stress",
            group: "Qualidade de Software"
        },{
            id: 17,
            image: DIR + 'mysql.jpg',
            label: "MySQL",
            group: "Banco de Dados"
        },{
            id: 18,
            image: DIR + 'RabbitMQ.jpg',
            label: "RabbitMQ",
            group: "Programação"
        },{
            id: 19,
            image: DIR + 'mongodb.png',
            label: "MongoDB",
            group: "Banco de Dados"
        },{
            id: 20,
            image: DIR + 'couchdb.png',
            label: "CouchDB",
            group: "Banco de Dados"
        },{
            id: 21,
            image: DIR + 'node_js.jpg',
            label: "NodeJs",
            group: "Programação"
        },{
            id: 22,
            image: DIR + 'git.png',
            label: "Git",
            group: "Gerência de Configuração de Software"
        },{
            id: 23,
            image: DIR + 'github.png',
            label: "GitHub",
            group: "Gerência de Configuração de Software"
        },{
            id: 24,
            image: DIR + 'gitlab.png',
            label: "GitLab",
            group: "Gerência de Configuração de Software"
        },{
            id: 25,
            image: DIR + 'ssh.png',
            label: "SSH tools",
            group: "Gerência de Configuração de Software"
        },{
            id: 26,
            image: DIR + 'docker.png',
            label: "Docker",
            group: "Gerência de Configuração de Software"
        },{
            id: 27,
            image: DIR + 'travis_ci.png',
            label: "TravisCI",
            group: "Gerência de Configuração de Software"
        },{
            id: 28,
            image: DIR + 'brain.png',
            label: "BeautifulSoup",
            group: "Programação"
        },{
            id: 29,
            image: DIR + 'css.png',
            label: "CSS",
            group: "Front-End"
        },{
            id: 30,
            image: DIR + 'soupUI_tool.jpg',
            label: "SoapUI",
            group: "Qualidade de Software"
        },{
            id: 31,
            image: DIR + 'uml2.png',
            label: "UML",
            group: "Requisitos"
        },{
            id: 32,
            image: DIR + 'gcs.png',
            label: "Gerência de Configuração de Software",
            group: "Gerência de Configuração de Software"
        },{
            id: 33,
            image: DIR + 'brain.png',
            label: "Qualidade de Software",
            group: "Qualidade de Software"
        },{
            id: 34,
            image: DIR + 'postgres.png',
            label: "Postgres",
            group: "Banco de Dados"
        },{
            id: 35,
            image: DIR + 'sdl.png',
            label: "SDL",
            group: "Programação"
        },{
            id: 36,
            image: DIR + 'brain.png',
            label: "Metodologias Ágeis",
            group: "Metodologias"
        },{
            id: 37,
            image: DIR + 'requirements_analysis.jpg',
            label: "Análise de Requisitos",
            group: "Requisitos"
        },{
            id: 38,
            image: DIR + 'bpmn.png',
            label: "Modelagem BPMN",
            group: "Requisitos"
        },{
            id: 39,
            image: DIR + 'brain.png',
            label: "Melhoria de processos",
            group: "Requisitos"
        },{
            id: 40,
            image: DIR + 'scrum.png',
            label: "Scrum",
            group: "Metodologias"
        },{
            id: 41,
            image: DIR + 'xp_agile.jpg',
            label: "XP",
            group: "Metodologias"
        },{
            id: 42,
            image: DIR + 'safe_agile.png',
            label: "SAFe",
            group: "Metodologias"
        },{
            id: 43,
            image: DIR + 'rational_up.jpg',
            label: "Rational Unified Process (RUP)",
            group: "Metodologias"
        },{
            id: 44,
            image: DIR + 'brain.png',
            label: "Metodologias de desenvolvimento de Software",
            group: "Metodologias",
            x: 0,
            y: 0,
            fixed: {
                x: true,
                y: true
            }
        },{
            id: 45,
            image: DIR + 'html.png',
            label: "HTML",
            group: "Front-End"
        },{
            id: 46,
            image: DIR + 'brain.png',
            label: "Orientação a Objetos",
            group: "Programação"
        },{
            id: 47,
            image: DIR + 'kanban.jpg',
            label: "Kanban",
            group: "Metodologias"
        },{
            id: 48,
            image: DIR + 'brain.png',
            label: "Front-End",
            group: "Front-End"
        },{
            id: 49,
            image: DIR + 'sqlite.png',
            label: "Sqlite",
            group: "Banco de Dados"
        },{
            id: 50,
            image: DIR + 'junit.jpg',
            label: "JUnit",
            group: "Qualidade de Software"
        }
    ];

    for (var i = nodes.length - 1; i >= 0; i--) {
      nodes[i].shape = 'circularImage';
      nodes[i].brokenImage = DIR + 'brain.png';
    }
    // create connections between people
    // value corresponds with the amount of contact between two people
    edges = [{
            from: 2,
            to: 8
        },{
            from: 33,
            to: 11
        },{
            from: 18,
            to: 1
        },{
            from: 35,
            to: 6
        },{
            from: 18,
            to: 3
        },{
            from: 12,
            to: 11
        },{
            from: 33,
            to: 12
        },{
            from: 33,
            to: 13
        },{
            from: 33,
            to: 14
        },{
            from: 17,
            to: 4
        },{
            from: 33,
            to: 15
        },{
            from: 33,
            to: 16
        },{
            from: 32,
            to: 22
        },{
            from: 46,
            to: 1
        },{
            from: 5,
            to: 17
        },{
            from: 46,
            to: 3
        },{
            from: 46,
            to: 4
        },{
            from: 46,
            to: 5
        },{
            from: 46,
            to: 6
        },{
            from: 32,
            to: 2
        },{
            from: 48,
            to: 45
        },{
            from: 48,
            to: 29
        },{
            from: 48,
            to: 3
        },{
            from: 48,
            to: 5
        },{
            from: 1,
            to: 9
        },{
            from: 1,
            to: 10
        },{
            from: 44,
            to: 43
        },{
            from: 44,
            to: 36
        },{
            from: 37,
            to: 31
        },{
            from: 37,
            to: 38
        },{
            from: 37,
            to: 39
        },{
            from: 37,
            to: 44
        },{
            from: 27,
            to: 8
        },{
            from: 22,
            to: 23
        },{
            from: 22,
            to: 24
        },{
            from: 33,
            to: 44
        },{
            from: 8,
            to: 26
        },{
            from: 21,
            to: 3
        },{
            from: 21,
            to: 19
        },{
            from: 30,
            to: 14
        },{
            from: 30,
            to: 16
        },{
            from: 8,
            to: 36
        },{
            from: 36,
            to: 40
        },{
            from: 36,
            to: 41
        },{
            from: 36,
            to: 47
        },{
            from: 36,
            to: 42
        },{
            from: 19,
            to: 3
        },{
            from: 2,
            to: 25
        },{
            from: 32,
            to: 8
        },{
            from: 27,
            to: 26
        },{
            from: 29,
            to: 45
        },{
            from: 28,
            to: 1
        },{
            from: 9,
            to: 10
        },{
            from: 5,
            to: 34
        },{
            from: 9,
            to: 34
        },{
            from: 44,
            to: 48
        },{
            from: 44,
            to: 32
        },{
            from: 30,
            to: 20
        },{
            from: 49,
            to: 9
        },{
            from: 49,
            to: 10
        },{
            from: 4,
            to: 50
        },{
            from: 13,
            to: 50
        }
    ];

    // create a network
    var container = document.getElementById('my_software_eng_skills');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        groups: {
            color: {
                background: 'white'
            }
        },
        nodes: {
            borderWidth: 4,
            size: 45,
            color: {
                border: '#111111',
                background: 'white'
            },
            font: {
                color: '#000000',
                size: 24,
                background: 'white'
            }
        },
        edges: {
            color: 'lightgray'
        },
        physics: {
          forceAtlas2Based: {
            gravitationalConstant: -30,
            centralGravity: 0.003,
            springLength: 230,
            springConstant: 0.18,
            damping: 0.6,
            avoidOverlap: 0.9
          },
          maxVelocity: 150,
          minVelocity: 0.3,
          solver: 'forceAtlas2Based',
          timestep: 0.5,
          adaptiveTimestep: true,
          stabilization: {
            enabled: true,
            iterations: 100,
            updateInterval: 10,
            onlyDynamicEdges: false,
            fit: true}
        }
    };
    network = new vis.Network(container, data, options);
};