const prisma = require('../config/database');

async function addStudent(req, res) {
    try {
        const data = req.body;
        const student = await prisma.Student.create({
            data: {
                name: data.name,
                age: parseInt(data.age),
                email: data.email,
                course: data.course
            }
        });
        await prisma.$disconnect();
        res.json(student)
    } catch (error) {
        console.error(error);
    }
}

async function getStudents(req, res) {
    try {
        const students = await prisma.Student.findMany({
            where: {
                isDeleted: false
            }
        });
        await prisma.$disconnect();
        res.json(students);
    } catch (error) {
        console.error(error);
    }
}

async function getData(req, res) {
    try {
        const id = req.params.id;
        const student = await prisma.Student.findFirst({
            where: {
                stdUUID: id
            }
        });
        await prisma.$disconnect();
        res.json(student)
    } catch (error) {
        console.error(error);
    }
}

async function removeStudent(req, res) {
    try {
        const id = req.params.id;
        const student = await prisma.Student.findFirst({
            where: {
                stdUUID: id
            }
        });
        const newID = student.id;
        const remove = await prisma.Student.update({
            where: { id: newID },
            data: { isDeleted: true }
        });
        await prisma.$disconnect();
        res.json(remove)
    } catch (error) {
        console.error(error);
    }
}

async function updateStudent(req, res) {
    try {
        const id = req.params.id;
        const { name, age, email, course } = req.body;
        const student = await prisma.Student.findFirst({
            where: {
                stdUUID: id
            }
        });
        const newID = student.id;
        const remove = await prisma.Student.update({
            where: { id: newID },
            data: { 
                name: name,
                age: age,
                email: email,
                course: course
            }
        });
        await prisma.$disconnect();
        res.json(remove)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { 
    addStudent, getStudents, getData, removeStudent, updateStudent,
}