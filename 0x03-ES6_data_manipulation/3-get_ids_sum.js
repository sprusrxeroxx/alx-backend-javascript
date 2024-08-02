export default function getListStudentIds(array) {
    if (Array.isArray(array)) {
        let Id = array.map( elem => elem.id);
        return Id;
    }

    else return [];
}

export default function getStudentIdsSum(studentsList) {
    let sum = getListStudentIds(studentsList).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}