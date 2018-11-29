var DIR = 'img/';

var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {
    nodes = [{
            "id": 1,
            "image": 'python_language.png',
            "label": "Python",
            "group": "Programação"
        },{
            "id": 2,
            "image": 'bash_language.png',
            "label": "Bash Script",
            "group": "Programação"
        },{
            "id": 3,
            "image": 'javascript_language.png',
            "label": "Javascript",
            "group": "Programação"
        },{
            "id": 4,
            "image": 'java_language.jpg',
            "label": "Java",
            "group": "Programação"
        },{
            "id": 5,
            "image": 'php_language.jpg',
            "label": "PHP",
            "group": "Programação"
        },{
            "id": 6,
            "image": 'cpp_language.png',
            "label": "C/C++",
            "group": "Programação"
        },{
            "id": 7,
            "image": 'brain.png',
            "label": "Metodologias de desenvolvimento de Software",
            "group": "Metodologias",
            "x": 0,
            "y": 0,
            "fixed": {
                "x": true,
                "y": true
            }
        },{
            "id": 8,
            "image": 'devops.png',
            "label": "Cultura DevOps",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 9,
            "image": 'django_framework.png',
            "label": "Django Framework",
            "group": "Programação"
        },{
            "id": 10,
            "image": 'drf.png',
            "label": "Django Rest (DRF)",
            "group": "Programação"
        },{
            "id": 11,
            "image": 'brain.png',
            "label": "Programação Defensiva",
            "group": "Qualidade de Software"
        },{
            "id": 12,
            "image": 'brain.png',
            "label": "Técnicas de Programação",
            "group": "Qualidade de Software"
        },{
            "id": 13,
            "image": 'brain.png',
            "label": "Testes Unitários",
            "group": "Qualidade de Software"
        },{
            "id": 14,
            "image": 'brain.png',
            "label": "Testes de Integração",
            "group": "Qualidade de Software"
        },{
            "id": 15,
            "image": 'brain.png',
            "label": "Testes de Carga",
            "group": "Qualidade de Software"
        },{
            "id": 16,
            "image": 'brain.png',
            "label": "Testes de Stress",
            "group": "Qualidade de Software"
        },{
            "id": 17,
            "image": 'mysql.jpg',
            "label": "MySQL",
            "group": "Banco de Dados"
        },{
            "id": 18,
            "image": 'RabbitMQ.jpg',
            "label": "RabbitMQ",
            "group": "Programação"
        },{
            "id": 19,
            "image": 'mongodb.png',
            "label": "MongoDB",
            "group": "Banco de Dados"
        },{
            "id": 20,
            "image": 'couchdb.png',
            "label": "CouchDB",
            "group": "Banco de Dados"
        },{
            "id": 21,
            "image": 'node_js.jpg',
            "label": "NodeJs",
            "group": "Programação"
        },{
            "id": 22,
            "image": 'git.png',
            "label": "Git",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 23,
            "image": 'github.png',
            "label": "GitHub",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 24,
            "image": 'gitlab.png',
            "label": "GitLab",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 25,
            "image": 'ssh.png',
            "label": "SSH tools",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 26,
            "image": 'docker.png',
            "label": "Docker",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 27,
            "image": 'travis_ci.png',
            "label": "TravisCI",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 28,
            "image": 'brain.png',
            "label": "BeautifulSoup",
            "group": "Programação"
        },{
            "id": 29,
            "image": 'css.png',
            "label": "CSS",
            "group": "Front-End"
        },{
            "id": 30,
            "image": 'soupUI_tool.jpg',
            "label": "SoapUI",
            "group": "Qualidade de Software"
        },{
            "id": 31,
            "image": 'uml2.png',
            "label": "UML",
            "group": "Requisitos"
        },{
            "id": 32,
            "image": 'gcs.png',
            "label": "Gerência de Configuração de Software",
            "group": "Gerência de Configuração de Software"
        },{
            "id": 33,
            "image": 'brain.png',
            "label": "Qualidade de Software",
            "group": "Qualidade de Software"
        },{
            "id": 34,
            "image": 'postgres.png',
            "label": "Postgres",
            "group": "Banco de Dados"
        },{
            "id": 35,
            "image": 'sdl.png',
            "label": "SDL",
            "group": "Programação"
        },{
            "id": 36,
            "image": 'brain.png',
            "label": "Metodologias Ágeis",
            "group": "Metodologias"
        },{
            "id": 37,
            "image": 'requirements_analysis.jpg',
            "label": "Análise de Requisitos",
            "group": "Requisitos"
        },{
            "id": 38,
            "image": 'bpmn.png',
            "label": "Modelagem BPMN",
            "group": "Requisitos"
        },{
            "id": 39,
            "image": 'brain.png',
            "label": "Melhoria de processos",
            "group": "Requisitos"
        },{
            "id": 40,
            "image": 'scrum.png',
            "label": "Scrum",
            "group": "Metodologias"
        },{
            "id": 41,
            "image": 'xp_agile.jpg',
            "label": "XP",
            "group": "Metodologias"
        },{
            "id": 42,
            "image": 'safe_agile.png',
            "label": "SAFe",
            "group": "Metodologias"
        },{
            "id": 43,
            "image": 'rational_up.jpg',
            "label": "Rational Unified Process (RUP)",
            "group": "Metodologias"
        },{
            "id": 44,
            "image": 'junit.jpg',
            "label": "JUnit",
            "group": "Qualidade de Software"
        },{
            "id": 45,
            "image": 'html.png',
            "label": "HTML",
            "group": "Front-End"
        },{
            "id": 46,
            "image": 'brain.png',
            "label": "Orientação a Objetos",
            "group": "Programação"
        },{
            "id": 47,
            "image": 'kanban.jpg',
            "label": "Kanban",
            "group": "Metodologias"
        },{
            "id": 48,
            "image": 'brain.png',
            "label": "Front-End",
            "group": "Front-End"
        },{
            "id": 49,
            "image": 'sqlite.png',
            "label": "Sqlite",
            "group": "Banco de Dados"
        }
    ];

    var DIR = 'img/';
    for (var i = nodes.length - 1; i >= 0; i--) {
        nodes[i].shape = 'circularImage';
        nodes[i].image = DIR + nodes[i].image;
        nodes[i].brokenImage = DIR + 'brain.png';
    }

    // create connections between knowledge
    // value corresponds with the amount of contact between two knowledge
    edges = [
        {"from": 1, "to": 18},
         {"from": 1, "to": 28},
         {"from": 1, "to": 46},
         {"from": 1, "to": 9},
         {"from": 1, "to": 10},
         {"from": 2, "to": 8},
         {"from": 2, "to": 25},
         {"from": 2, "to": 32},
         {"from": 3, "to": 19},
         {"from": 3, "to": 48},
         {"from": 3, "to": 46},
         {"from": 3, "to": 18},
         {"from": 3, "to": 21},
         {"from": 4, "to": 44},
         {"from": 4, "to": 46},
         {"from": 4, "to": 17},
         {"from": 5, "to": 48},
         {"from": 5, "to": 46},
         {"from": 5, "to": 34},
         {"from": 5, "to": 17},
         {"from": 6, "to": 35},
         {"from": 6, "to": 46},
         {"from": 7, "to": 43},
         {"from": 7, "to": 36},
         {"from": 7, "to": 37},
         {"from": 7, "to": 33},
         {"from": 7, "to": 48},
         {"from": 7, "to": 32},
         {"from": 8, "to": 27},
         {"from": 8, "to": 36},
         {"from": 8, "to": 26},
         {"from": 8, "to": 32},
         {"from": 9, "to": 10},
         {"from": 9, "to": 49},
         {"from": 9, "to": 34},
         {"from": 10, "to": 49},
         {"from": 11, "to": 33},
         {"from": 11, "to": 12},
         {"from": 12, "to": 33},
         {"from": 13, "to": 33},
         {"from": 13, "to": 44},
         {"from": 14, "to": 33},
         {"from": 14, "to": 30},
         {"from": 15, "to": 33},
         {"from": 16, "to": 33},
         {"from": 16, "to": 30},
         {"from": 19, "to": 21},
         {"from": 20, "to": 30},
         {"from": 22, "to": 23},
         {"from": 22, "to": 24},
         {"from": 22, "to": 32},
         {"from": 26, "to": 27},
         {"from": 29, "to": 45},
         {"from": 29, "to": 48},
         {"from": 31, "to": 37},
         {"from": 36, "to": 40},
         {"from": 36, "to": 41},
         {"from": 36, "to": 47},
         {"from": 36, "to": 42},
         {"from": 37, "to": 38},
         {"from": 37, "to": 39},
         {"from": 45, "to": 48}
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