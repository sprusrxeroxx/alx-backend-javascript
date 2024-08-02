export default function getStudentsByLocation(studentList, city){
    let corrLocales = studentList.filter(elem => elem.location == city);
    return corrLocales;
}