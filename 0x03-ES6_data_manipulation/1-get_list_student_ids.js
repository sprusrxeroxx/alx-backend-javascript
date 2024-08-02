export default function getListStudentIds(array) {
    if (Array.isArray(array)) {
        let Id = array.map( elem => elem.id);
        return Id;
    }

    else return [];
}