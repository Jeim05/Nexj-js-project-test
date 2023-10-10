import technologies from "./dataTech"

const project = [
    {
        id: 1,
        name: "Proyecto 1",
        tech: [
            technologies.find((tech) => tech.name === "HTML"),
            technologies.find((tech) => tech.name === "CSS"),
        ]
    },
    {
        id: 1,
        name: "Proyecto 2",
        tech: [
            technologies.find((tech) => tech.name === "Wordpress"),
        ]
    }
]

export default project