
const students = [{name :"ezequiel"}, {name:'hector'}]

const techers= ['ezequiel']

const getAllStudents = () => {


    try {
        
        console.log(students);
        

    } catch (error) {
        throw new Error(`${error}`);
        
    }

}

getAllStudents()