
const students = [{name :"ezequiel"}, {name:'hector'}]


const getAllStudents = () => {


    try {
        
        console.log(students);
        

    } catch (error) {
        throw new Error(`${error}`);
        
    }

}

getAllStudents()